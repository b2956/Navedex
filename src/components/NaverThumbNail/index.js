import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.li`
    /* width: ${ 280 * window.innerWidth / 1280 }px; */
    width: 280px;
    /* height: ${ 375 * window.innerWidth / 1280 }px; */
    height: 375px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    &:not(:last-of-type) {
        margin-right: 35px;
    }
`;

const NaverPictureWrap = styled.div`
    /* width: ${ 280 * window.innerWidth / 1280 }px; */
    /* height: ${ 280 * window.innerWidth / 1280 }px; */
    width: 280px;
    height: 280px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`;

const NaverPicture = styled.img`
    width: 280px;
    height: auto;
`;

const NaverDescription = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
`;

const NaverName = styled.h3`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #212121;
    margin-block-start : 5;
    margin-block-end : 0;
`;

const NaverPosition = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #212121;
    margin-block-start : 0;
    margin-block-end: 5;
`

const IconsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const Icon = styled.img`
    width: auto;
    height: 20px;

    &:hover {
        cursor: pointer;
    }
`;

const DeleteIcon = styled(Icon)`
    margin-right: 20px;
`;

const NaverThumbNail = ({ pictureUrl, name, position , id, deleteNaverHandler, getNaverDetails }) => {

    const useDeleteNaver = () => {
        deleteNaverHandler(id);
    }

    const useGetNaverDetails = () => {
        getNaverDetails(id);
    }

    return (
        <Wrapper>
            <NaverPictureWrap onClick={useGetNaverDetails} >
                <NaverPicture src={require('../../assets/images/IMG_9945.png')} />
            </NaverPictureWrap>
            <NaverDescription>
                <NaverName>{name}</NaverName>
                <NaverPosition>{position}</NaverPosition>
                <IconsWrapper>
                    <DeleteIcon key='1' src={require('../../assets/images/VectorDelete.svg')} title='Apagar Naver' onClick={useDeleteNaver}/>
                    <Link to={`edit-naver/${id}`} >
                        <Icon key='2' src={require('../../assets/images/VectorEdit.svg')} title='Editar Naver' />
                    </Link>
                </IconsWrapper>
            </NaverDescription>
        </Wrapper>
    )
}

export default NaverThumbNail;