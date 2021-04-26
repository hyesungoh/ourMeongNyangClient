import React from "react";
import styled, { keyframes } from "styled-components";

interface IInputLoading {
    isLoading: boolean;
}

const InputLoading = ({ isLoading }: IInputLoading) => {
    return (
        <LoadingOverlay isLoading={isLoading}>
            <LoadingCircle></LoadingCircle>
        </LoadingOverlay>
    );
};

export default InputLoading;

const LoadingOverlay = styled.div<{ isLoading: boolean }>`
    position: absolute;
    top: 100%;

    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: ${({ theme }) => theme.colorYellow};
    display: flex;
    justify-content: center;
    align-items: center;

    transition: transform 0.8s;
    transform: translateY(${(props) => (props.isLoading ? "-100%" : "0")});
`;

const LoadingAnimation = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

const LoadingCircle = styled.div`
    width: 150px;
    height: 150px;

    border: 8px solid;
    border-radius: 50%;
    border-color: ${({ theme }) =>
        `${theme.colorNavy} ${theme.colorNavyOpacity} ${theme.colorNavyOpacity} ${theme.colorNavyOpacity}`};

    animation: ${LoadingAnimation} 2s infinite;
`;
