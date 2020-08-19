import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    width: 100%;
    height: 40px;
    border: none;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    &:focus {
        border: none;
        outline: none;
        cursor: pointer;
    }

    &:hover {
        cursor: pointer;
    }
`;

const DarkButton = styled(ButtonWrapper)`
    color:  #fff;
    background-color: #212121;
`

const WhiteButton = styled(ButtonWrapper)`
    color: #212121;
    background-color: #fff;
`



const Button = ({text, isFull, onClickEffect}) => {
    let button;

    const useClickHandler = async (e) => {
        console.log(e.target);
        e.target.style.opacity = 0.7;

        onClickEffect();
    }

    
    isFull ? button = <DarkButton onClick={useClickHandler}>{text}</DarkButton> : button = <WhiteButton onClick={useClickHandler}>{text}</WhiteButton>

    return button
}

export default Button;