import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import '../Button';

const ModalWrapper = styled.div`
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
`
const Title = styled.h1`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    margin: 32px;
    color: #212121;
`

const Message = styled.h3`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    margin: 32px;
    line-height: 36px;
    color: #212121;
`;

const Modal = ({ title, message, options }) => {
    return ( createPortal('modal', 
        <ModalWrapper>
            <Title>{title}</Title>
            <Message>{message}</Message>
            { options &&
                options.map(item => {
                    return <Button text={item.text} isFull={item.isFull} onClickEffect={item.onClickEffect} />
                })
            }
        </ModalWrapper>
    ))
}

export default Modal;