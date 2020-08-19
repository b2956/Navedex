import React, { useState } from 'react';
import styled from 'styled-components';

import logo from '../../assets/images/logo.svg';
import InputElement from '../../components/InputElement';
import Button from '../../components/Button';

const LoginWrapper = styled.div`
    width: ${450 * (window.innerWidth / 1280)}px;
    height: ${400 * (window.innerHeight / 720)}px;
    border: 1px solid #212121;
    text-align: center;
    padding: ${40 * (window.innerHeight / 720)}px ${30 * (window.innerWidth / 1280)}px;
`;

const Logo = styled.img`
    height: auto;
    width: 50%;
    margin-bottom: 60px;
`

const Login = ({ LoginHandler }) => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const login = () => {
        LoginHandler(loginData);
    };

    return (
        <LoginWrapper>
            <Logo src={logo}/>
            <InputElement label='E-mail' name='email' key={1} value={loginData.email} setNewValue={setLoginData} type='email' />
            <InputElement label='Password' name='password' key={2} value={loginData.password} setNewValue={setLoginData} type='password'/>
            <Button text='Entrar' isFull={true} onClickEffect={login}/>
        </LoginWrapper>
    )
}

export default Login;