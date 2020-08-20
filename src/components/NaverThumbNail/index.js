import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
    width: ${ 280 * window.innerWidth / 1280 }px;
    height: ${ 375 * window.innerWidth / 1280 }px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    &:not(:last-of-type) {
        margin-right: 35px;
    }
`;

const NaverPictureWrap = styled.div`
    width: ${ 280 * window.innerWidth / 1280 }px;
    height: ${ 280 * window.innerWidth / 1280 }px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const NaverPicture = styled.img``;

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
    margin: 5 0;
`;

const NaverPosition = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #212121;
    margin: 5 0;
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

    &:not(:last-of-type) {
        margin-right: 20px;
    }
`;

const NaverThumbNail = ({ pictureUrl, name, position , id }) => {
    

    return (
        <Wrapper>
            <NaverPictureWrap>
                <NaverPicture src={require('../../assets/images/IMG_9945.png')} />
            </NaverPictureWrap>
            <NaverDescription>
                <NaverName>{name}</NaverName>
                <NaverPosition>{position}</NaverPosition>
                <IconsWrapper>
                    <Icon key='1' src={require('../../assets/images/VectorDelete.svg')} title='Apagar Naver'/>
                    <Icon key='2' src={require('../../assets/images/VectorEdit.svg')} title='Editar Naver' />
                </IconsWrapper>
            </NaverDescription>
        </Wrapper>
    )
}

export default NaverThumbNail;