import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DescriptionWrapper = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 25px;
    box-sizing: border-box;
`;

const CloseButton = styled.img`
    width: 15px;
    height: 15px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-20px, 20px);

    &:hover {
        cursor: pointer;
    }
`;

const Name = styled.h1`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #000000;
    margin: 5 0;
    padding: 0;
    margin-block-start: 0;
    margin-block-end: 0;
`;

const Text = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #212121;
    margin: 5 0;
    padding: 0;
    margin-bottom: 5px;
`;

const Subtitles = styled.h3`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #212121;
    margin: 5 0;
    padding: 0;
    margin-block-start: 0;
    margin-block-end: 0;
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
`;

const IconsWrapper = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    justify-self: flex-end;
    align-self: flex-end;
`;

const Icon = styled.img`
    width: auto;
    height: 20px;

    &:hover {
        cursor: pointer;
    }
`;

const DeleteIcon = styled(Icon)`
    margin-right: 20px;
`;

const NaverModalDescription = ({ id, name, birthdate, project, job_role, admission_date, closeModal, openDeleteModalHandler}) => {
    const useDeleteNaver = () => {
        openDeleteModalHandler(id);

        closeModal();
    };

    return (
        <DescriptionWrapper>
            <CloseButton src={require('../../../assets/images/closeVector.svg')} onClick={closeModal} />
            <TextBox>
                <Name>{name}</Name>
                <Text>{job_role}</Text>
            </TextBox>
            <TextBox>
                <Subtitles>Idade</Subtitles>
                <Text>{new Date(birthdate.replace('T00', 'T05')).toLocaleDateString()}</Text>
            </TextBox>
            <TextBox>
                <Subtitles>Tempo de Empresa</Subtitles>
                <Text>{new Date(admission_date.replace('T00', 'T05')).toLocaleDateString()}</Text>
            </TextBox>
            <TextBox>
                <Subtitles>Projetos que participou</Subtitles>
                <Text>{project}</Text>
            </TextBox>
            <IconsWrapper>
                <DeleteIcon key='1' src={require('../../../assets/images/VectorDelete.svg')} title='Apagar Naver' onClick={useDeleteNaver}/>
                <Link to={`edit-naver/${id}`} >
                    <Icon key='2' src={require('../../../assets/images/VectorEdit.svg')} title='Editar Naver' />
                </Link>
            </IconsWrapper>
        </DescriptionWrapper>
    )    
}

export default NaverModalDescription;