import React from "react";
import styled from "styled-components";

interface IInputText {
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
    onSubmit: () => Promise<void>;
}

const InputText = ({ text, setText, onSubmit }: IInputText) => {
    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = e;

        setText(value);
    };

    return (
        <StyledTextDiv>
            <StyledInputDiv>
                <StyledTextInput
                    id="text"
                    type="text"
                    value={text}
                    required
                    maxLength={45}
                    onChange={onTextChange}
                />
                <span></span>
                <StyledTextLabel htmlFor="text">글쓰기</StyledTextLabel>
            </StyledInputDiv>

            <StyledInputDiv>
                <StyledSubmitBtn onClick={onSubmit}>제출</StyledSubmitBtn>
                <span></span>
            </StyledInputDiv>
            <StyledTextSpan>귀여운 멍냥이 자랑해주세용</StyledTextSpan>
        </StyledTextDiv>
    );
};

export default InputText;

const StyledTextSpan = styled.span`
    position: absolute;
    right: 0.8rem;
    bottom: 0.8rem;

    font-size: 0.8rem;
    color: ${({ theme }) => theme.colorNavy};
`;

const StyledTextDiv = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    padding: 12% 0px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    background-color: ${({ theme }) => theme.colorWhite};
    
    @media screen and (max-width: ${({ theme }) => theme.sizeTablet}) {
        width: 100%;
        height: 50%;
        padding: 4%;
    }
`;

const StyledInputDiv = styled.div`
    position: relative;
    width: 80%;
    display: flex;
    flex-direction: column;
`;

const StyledTextLabel = styled.label`
    position: absolute;
    top: 50%;
    left: 4%;
    cursor: text;
    transform: translateY(-50%);
    transform-origin: left;
    transition: transform 0.3s;
`;

const StyledTextInput = styled.input`
    position: relative;
    all: unset;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colorGray};

    width: 100%;
    height: 50px;
    padding-left: 4%;

    & + span {
        width: 100%;
        height: 3px;
        background-color: ${({ theme }) => theme.colorNavy};
        transform: scaleX(0);
        transition: transform 0.3s;
    }

    &:focus,
    &:valid {
        & + span {
            transform: scaleX(1);
        }

        & ~ ${StyledTextLabel} {
            transform: translateY(-250%) scale(0.85);
        }
    }
`;

const StyledSubmitBtn = styled.button`
    position: relative;
    all: unset;
    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.colorYellow};
    text-align: center;
    cursor: pointer;

    transition: color 0.3s, background-color 0.3s;

    & + span {
        position: absolute;
        bottom: -3px;
        width: 100%;
        height: 3px;
        background-color: ${({ theme }) => theme.colorNavy};
        transform: scaleX(0);
        transition: transform 0.3s;
    }

    &:hover + span {
        transform: scaleX(1);
    }

    &:active {
        background-color: ${({ theme }) => theme.colorYellowClick};
        color: ${({ theme }) => theme.colorWhite};

        & + span {
            transform: scaleX(1);
        }
    }
`;
