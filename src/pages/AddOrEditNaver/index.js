import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import InputElement from '../../components/InputElement';
import Button from '../../components/Button';
import arrowIcon from '../../assets/images/Arrow-Icon.svg';

const Wrapper = styled.div`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SectionHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const BackLink = styled.img`
    height: 25px;
    width: auto;
    margin-right: 25px;
`;

const SectionTitle = styled.h1`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #212121;
`;

const FormWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const FormInput = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    height: fit-content;
`;

const InputColumn = styled.div`
    width: ${ 280 * window.innerWidth / 1280 }px;
    height: fit-content;
    margin: 0 ${ 32 * window.innerWidth / 1280 }px 0 0;
    padding: 0;
`
const SaveButtonWrapper = styled.div`
    align-self: flex-end;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: ${ 180 * window.innerWidth / 1280 }px;
    transform: translateX(-${ 32 * window.innerWidth / 1280 }px);
`;

const AddOrEditNaver = ({ isEditing, authorizationToken }) => {
    const [naverData, setNaverData] = useState({
        name: '',
        birthdate: '',
        project: '',
        job_role: '',
        admission_date: '',
        url: ''
    });

    const addNewNaver = () => {

        const requestBody = {
            ...naverData
        }
      
        fetch('https://navedex-api.herokuapp.com/v1/navers', {
          method: 'post',
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${authorizationToken}`,
          },
          body: JSON.stringify(requestBody)
        })
          .then(res => {
            console.log(res);
            return res.json();
          })
          .then(resData => {
            console.log(resData);
          })
          .catch(err => console.log(err))
    }
    

    return (
        <Wrapper>
            <SectionHeader>
                <Link to='/navers-list' >
                    <BackLink src={arrowIcon} />
                </Link>
                <SectionTitle>{!isEditing ? 'Adicionar Naver' : 'Editar Naver' }</SectionTitle>
            </SectionHeader>
            <FormWrap>
                <FormInput>
                    <InputColumn>
                        <InputElement 
                            label='Nome'
                            name='name'
                            setNewValue={setNaverData} 
                            type ='text'
                            value={naverData.name}
                            key='1'
                        />
                        <InputElement 
                            label='Idade'
                            name ='birthdate'
                            setNewValue={setNaverData} 
                            type='text'
                            value={naverData.birthdate}
                            key='2'
                        />
                        <InputElement 
                            label='Projetos que participou'
                            name='project'
                            setNewValue={setNaverData} 
                            type='text' 
                            value={naverData.project}
                            key='3'
                        />
                    </InputColumn>
                    <InputColumn>
                        <InputElement 
                            label='Cargo'
                            name='job_role'
                            setNewValue={setNaverData} 
                            type='text' 
                            value={naverData.job_role}
                            key='4'
                        />
                        <InputElement 
                            label='Tempo de empresa'
                            name='admission_date'
                            setNewValue={setNaverData} 
                            type='text' 
                            value={naverData.admission_date}
                            key='5'
                        />
                        <InputElement 
                            label='URL da foto do Naver'
                            name='url'
                            setNewValue={setNaverData} 
                            type='text' 
                            value={naverData.url}
                            key='6'
                        />
                    </InputColumn>
                </FormInput>
                <SaveButtonWrapper>
                    <Button isFull={true} text='Salvar' onClickEffect={!isEditing ? addNewNaver : ()=>{}} />
                </SaveButtonWrapper>
            </FormWrap>
        </Wrapper>
    )
}

export default AddOrEditNaver;