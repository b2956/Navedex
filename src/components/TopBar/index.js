import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';

const TopBarWrapper = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    justify-self: flex-start;
    align-self: flex-start;
    margin-bottom: 65px;
`;

const Logo = styled.img`
    height: 35px;
    width: auto;

    &:hover {
        cursor: pointer;
    }
`

const Sair = styled.h3`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #000;

    &:hover {
        cursor: pointer;
    }
`


const TopBar = ({ setIsLoggedIn }) => {

    const LogOff = () => {
        setIsLoggedIn(false);
    }

    return (
        <TopBarWrapper>
            <Link to='/navers-list'>
                <Logo src={logo} />
            </Link>
            <Sair onClick={LogOff} >Sair</Sair>
        </TopBarWrapper>
    )
};

export default TopBar;