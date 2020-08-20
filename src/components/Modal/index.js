import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import Button from '../Button';

const ModalWrapper = styled.div`
    background-color: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    width: ${window.innerWidth > 1280 ? 600 * window.innerWidth / 1280 : 600 }px;
    transform: translate(-50%, -50%);
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`
const Title = styled.h1`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    margin: 35px;
    color: #212121;
`

const Message = styled.h3`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    margin: 35px;
    line-height: 36px;
    color: #212121;
`;

const OptionsButton = styled(Button)`
    width: 175px;
    margin-right: 35px;
    margin-bottom: 35px;
`
const ButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-self: flex-end;
    max-width: 65%;
    margin: 35px;

    & button:not(:first-of-type) {
        margin-left: 35px;
    }
`
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
`

const Modal = ({ title, message, options, closeModalHandler }) => {

    return ( 
        createPortal(
            <ModalWrapper>
                <CloseButton src={require('../../assets/images/closeVector.svg')} onClick={closeModalHandler} />
                <Title>{title}</Title>
                <Message>{message}</Message>
                { options &&
                    <ButtonsWrapper>
                    { 
                        options.map(item => {
                            return <OptionsButton text={item.text} isFull={item.isFull} onClickEffect={item.onClickEffect} />
                        })
                    }
                    </ButtonsWrapper>
                }
            </ModalWrapper>, 
            document.getElementById('modal')
        )
    )
}

export default Modal;