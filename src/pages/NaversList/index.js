import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import AddNaverBar from '../../components/AddNaverBar';
import NaverThumbNail from '../../components/NaverThumbNail';

const NaversList = ({ authorizationToken }) => {
    const [navers, setNavers] = useState([]);
    const [modalnaver, setModalNaver] = useState(null);

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
                setNavers(prevNavers => prevNavers.filter(naver => naver.id !== id))
            } 
            return res.json();
          })
          .then(resData => {
            console.log(resData);
          })
          .catch(err => console.log(err));
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
    }


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

    return (
        <NaversListWrapper>
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
                                deleteNaverHandler={deleteNaverHandler}
                                getNaverDetails={getNaverById}
                            />
                        )
                    })
                }
            </Navers>
        </NaversListWrapper>
    )
}

export default NaversList;