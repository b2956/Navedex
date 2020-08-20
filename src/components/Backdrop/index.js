import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const BackDropWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
`

const BackDrop = () => createPortal('backdrop', <BackDropWrapper/>);

export default BackDrop;