import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 32px 0;
`;

const Label = styled.label`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #212121;
    align-self: flex-start;
`;

const Input = styled.input`
    border: 1px solid #424242;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    padding-left: 5px;

    &:focus {
        border: 2px solid #111;
        border-radius: 0;
        outline: none; 
    }
`;

const InputElement = ({label, name, value, type, setNewValue}) => {
    const handleInputChange = (e) => {
        const newInputValue = e.target.value;
        const target = e.target.name;

        setNewValue(prevState => {
            const newState = {
                ...prevState
            };

            newState[target] = newInputValue;

            return newState;
        });
    }

    return (
        <InputWrapper>
            <Label>{label}</Label>
            <Input 
                htmlFor={name} 
                placeholder={label} 
                value={value} 
                onChange={handleInputChange} 
                type={type} 
                name={name} 
            />
        </InputWrapper>
    )
}

export default InputElement;