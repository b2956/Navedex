import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const AddNaverBarWrapper = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 35 0;
`;

const NaverText = styled.h1`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 50px;
    color: #212121;
    width: fit-content;
    display: inline-block;
`;

const AddNaver = styled(Link)`
    background-color: #212121;
    height: 50px;
    width: ${window.innerWidth >= 1280 ? (150 * window.innerWidth / 1280) : 150}px;
    color: #fff;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;
    padding: 10 30;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`;


const AddNaverBar = () => {


    return (
        <AddNaverBarWrapper>
            <NaverText>Navers</NaverText>
            <AddNaver to='/add-naver' title='Adicionar Naver'>Adicionar Naver</AddNaver>
        </AddNaverBarWrapper>
    )
}

export default AddNaverBar;