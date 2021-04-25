import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

import { storageService } from "firebase/index";

import InputImagePreview from "./InputImagePreview";

const Input = () => {
    const [image, setImage] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { files },
        } = e;
        const targetImage = files?.[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result as string);
        };
        reader.readAsDataURL(targetImage as Blob);
    };

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = e;

        setText(value);
    };

    const onSubmit = async () => {
        if (image !== "") {
            setIsLoading(true);
            const fileRef = storageService.ref().child(`${uuid()}`);
            try {
                const response = await fileRef
                    .putString(image as string, "data_url")
                    .then((res) => {
                        return res;
                    });
                const fileURL = await response.ref.getDownloadURL();

                // using axios
            } catch (error) {
                console.log(error);
            }
        } else {
            alert("이미지를 업로드 후에 해주세용 !");
        }
    };

    return (
        <StyledSection>
            <StyledFileDiv>
                <InputImagePreview imageURL={image} />
                <StyledFileLabel htmlFor="file">
                    <FontAwesomeIcon
                        icon={faUpload}
                        size="2x"
                    ></FontAwesomeIcon>
                </StyledFileLabel>
                <StyledFileInput
                    id="file"
                    type="file"
                    accept="image/*"
                    onChange={onFileChange}
                />
            </StyledFileDiv>

            <StyledTextDiv>
                <StyledInputDiv>
                    <StyledTextInput
                        id="text"
                        type="text"
                        required
                        onChange={onTextChange}
                    />
                    <span></span>
                    <StyledTextLabel htmlFor="text">글쓰기</StyledTextLabel>
                </StyledInputDiv>

                <StyledInputDiv>
                    <StyledSubmitBtn onClick={onSubmit}>제출</StyledSubmitBtn>
                    <span></span>
                </StyledInputDiv>
                <StyledFileSpan>귀여운 멍냥이 자랑해주세용</StyledFileSpan>
            </StyledTextDiv>
        </StyledSection>
    );
};

// 이제 디자인 마무리 하고 > 이미지 프리뷰

export default Input;

const StyledSection = styled.section`
    width: 50vw;
    height: 60vh;
    background-color: ${({ theme }) => theme.colorWhite};
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);

    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledFileDiv = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    background-color: ${({ theme }) => theme.colorGray};

    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledFileLabel = styled.label`
    width: 60%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 2.5px dashed ${({ theme }) => theme.colorNavy};
    border-radius: 16px;
    cursor: pointer;

    color: ${({ theme }) => theme.colorNavy};
`;

const StyledFileInput = styled.input`
    display: none;
`;

const StyledFileSpan = styled.span`
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
