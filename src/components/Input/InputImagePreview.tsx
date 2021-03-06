import React from "react";
import styled from "styled-components";

interface IInputImagePreview {
    imageURL: string;
}

const InputImagePreview = ({ imageURL }: IInputImagePreview) => {
    if (imageURL !== "") {
        return (
            <StyledDiv>
                <StyledImg src={imageURL} alt="posting preview" />
            </StyledDiv>
        );
    }

    return <div></div>;
};

export default InputImagePreview;

const StyledDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
