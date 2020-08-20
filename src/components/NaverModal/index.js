import React from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

import NaverModalDescription from './NaverModalDescription';

const ModalWrapper = styled.div`
    width: ${window.innerWidth > 1100 ? '1000px' : '90vw'};
    height: ${window.innerWidth > 1100 ? '500px' : '45vw'};
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 10;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
`;

const NaverPictureWrapper = styled.div`
    width: ${window.innerWidth > 1100 ? '500px' : '45vw'};
    height: ${window.innerWidth > 1100 ? '500px' : '45vw'};
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
`;

const NaverPicture = styled.img`
    width: 500px;
    height: auto;
`;


const NaverModal = ({ naver, closeModalHandler, openDeleteModalHandler }) => {

    return ( 
        createPortal(
            <ModalWrapper>
                <NaverPictureWrapper>
                    <NaverPicture src={naver.url} />
                </NaverPictureWrapper>
                <NaverModalDescription  
                    admission_date={naver.admission_date}
                    birthdate={naver.birthdate}
                    job_role={naver.job_role}
                    name={naver.name}
                    project={naver.project}
                    id={naver.id}
                    closeModal={closeModalHandler}
                    openDeleteModalHandler={openDeleteModalHandler}
                />
            </ModalWrapper>,
            document.getElementById('naver-modal')
        )
    )
};

export default NaverModal