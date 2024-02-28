import React from 'react';
import styled from 'styled-components';
import { primaryColor } from '../theme/color';

const MyButton = ({ text, onClick, disabled = false, variant = false }) => {
    const primaryStyle = `bg-[#555F1A] text-white border-none`;
    const variantStyle = `bg-white text-[#555F1A] border-[1px] border-[#555F1A]`;

    return (
        <SubmitButton
            disabled={disabled ? true : false}
            onClick={onClick}
            className={`w-full h-full m-auto rounded p-2 ${
                variant ? variantStyle : primaryStyle
            } disabled:opacity-50`}
        >
            {text}
        </SubmitButton>
    );
};

export default MyButton;

const SubmitButton = styled.button`
    &:hover {
        background-color: ${primaryColor};
        /* opacity: 0.5; */
        color: white;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    }
    &:active {
        background-color: ${primaryColor};
        color: white;
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    }
`;
