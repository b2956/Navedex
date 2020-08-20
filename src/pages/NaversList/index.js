import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import AddNaverBar from '../../components/AddNaverBar';
import NaverThumbNail from '../../components/NaverThumbNail';
import MessageModal from '../../components/Modal';
import BackDrop from '../../components/Backdrop';
import NaverModal from '../../components/NaverModal';

const NaversListWrapper = styled.div`
width: 100%;
flex: 1;
flex-direction: column;
align-items: center;
`;

const Navers = styled.ul`
width: 100%;
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
margin-top: 35px;
list-style: none;
padding: 0;
`

const NaversList = ({ authorizationToken }) => {
    const [navers, setNavers] = useState([]);

    const [modalNaver, setModalNaver] = useState(null);

    const [isMessageModalVisible, setIsMessageModalVisible] = useState(false);
    const [messageModalProps, setMessageModalProps] = useState({
        title: 'Excluir Naver',
        message: 'Tem certeza que deseja ecluir este Naver?',
        options: [
            {
                text: 'Cancelar',
                isFull: false,
                onClickEffect: () => setIsMessageModalVisible(false)
            },
            {
                text: 'Excluir',
                isFull: true,
                onClickEffect: undefined
            },
        ]
    });

    const closeMessageModalHandler = () => {
        setIsMessageModalVisible(false);
        setMessageModalProps({
            title: 'Excluir Naver',
            message: 'Tem certeza que deseja ecluir este Naver?',
            options: [
                {
                    text: 'Cancelar',
                    isFull: false,
                    onClickEffect: () => setIsMessageModalVisible(false)
                },
                {
                    text: 'Excluir',
                    isFull: true,
                    onClickEffect: undefined
                },
            ]
        });
    }

    const successDeleteModalProps = {
        title: 'Naver Excluído',
        message: 'Naver excluído com sucesso',
        options: null
    };

    const failedDeleteModalProps = {
        title: 'A Opreação Falhou',
        message: 'A operação não pôde ser concluída, tente novamente',
        options: null
    };

    useEffect(() => {
        fetch('https://navedex-api.herokuapp.com/v1/navers', {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${authorizationToken}`,
            },
            method: 'get'
        })
          .then(res => {
            console.log(res);
            return res.json();
          })
          .then(resData => {
            console.log(resData);
            setNavers(resData);
          })
          .catch(err => console.log(err));
    }, [authorizationToken]);

    const deleteNaverHandler = (id) => {
        fetch(`https://navedex-api.herokuapp.com/v1/navers/${id}`, {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${authorizationToken}`,
            },
            method: 'delete'
        })
          .then(res => {
            console.log(res);
            if(res.status === 200) {
                setMessageModalProps(successDeleteModalProps);
                setNavers(prevNavers => prevNavers.filter(naver => naver.id !== id));
            } else {
                setMessageModalProps(failedDeleteModalProps);
            }
            return res.json();
          })
          .then(resData => {
            console.log(resData);
          })
          .catch(err => console.log(err));
    }

    const openDeleteModalHandler = (id) => {
        setMessageModalProps(prevState => {
            const newState = {
                ...prevState
            };

            newState.options[1].onClickEffect = () => deleteNaverHandler(id)

            return (newState);
        })

        setIsMessageModalVisible(true);
    }

    const getNaverById = (id) => {

        fetch(`https://navedex-api.herokuapp.com/v1/navers/${id}`, {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${authorizationToken}`,
            },
            method: 'get'
        })
          .then(res => {
            console.log(res);
            return res.json();
          })
          .then(resData => {
            console.log(resData);
          })
          .catch(err => console.log(err));
    };

    const closeNaverModalHandler = () => setModalNaver(null);

    const openNaverModalHandler = (id) => {
        const selectedNaver = navers.filter(naver => naver.id === id)[0];

        console.log(selectedNaver);

        setModalNaver(selectedNaver);
    }

    return (
        <NaversListWrapper>
            { isMessageModalVisible &&
                <React.Fragment>
                    <MessageModal title={messageModalProps.title} message={messageModalProps.message} options={messageModalProps.options} closeModalHandler={closeMessageModalHandler} />
                    <BackDrop closeModalHandler={closeMessageModalHandler} />
                </React.Fragment>
            }
            { modalNaver &&
                <React.Fragment>
                    <NaverModal  
                        naver={modalNaver} 
                        closeModalHandler={closeNaverModalHandler} 
                        openDeleteModalHandler={openDeleteModalHandler}
                    />
                    <BackDrop closeModalHandler={closeNaverModalHandler} />
                </React.Fragment>
            }
            <AddNaverBar/>
            <Navers>
                { navers.length > 0 &&
                    navers.map((naver, index) => {
                        return (
                            <NaverThumbNail 
                                id={naver.id}
                                name={naver.name}
                                pictureUrl={naver.url}
                                position={naver.job_role}
                                key={index}
                                openDeleteModalHandler={openDeleteModalHandler}
                                openNaverModalHandler={openNaverModalHandler}
                            />
                        )
                    })
                }
            </Navers>
        </NaversListWrapper>
    )
}

export default NaversList;