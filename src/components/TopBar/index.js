import React from 'react';
import styled from 'styled-components';

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
`;

const Logo = styled.img`
    height: 35px;
    width: auto;
`

const Sair = styled.text`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #000;
`


const TopBar = () => {
    return (
        <TopBarWrapper>
            <Logo src={logo} />
            <Sair>Sair</Sair>
        </TopBarWrapper>
    )
};

export default TopBar;