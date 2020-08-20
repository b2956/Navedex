import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const BackDropWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 5;

    &:hover {
        cursor: pointer;
    }
`

const BackDrop = ({closeModalHandler}) => createPortal(<BackDropWrapper onClick={closeModalHandler}/>, document.getElementById('backdrop'));

export default BackDrop;