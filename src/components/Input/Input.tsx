import React, { useState } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colorGray};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledFileLabel = styled.label`
    color: red;
`;

const StyledFileInput = styled.input`
    display: none;
`;

const StyledTextLabel = styled.label``;

const StyledTextInput = styled.input`
    all: unset;
`;

const Input = () => {
    const [image, setImage] = useState<string>("");

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

    const onSubmit = () => {
        const data = new FormData();

        console.log(image);
    };

    return (
        <StyledSection>
            {/*
            1. 업로드 했으면 이미지 프리뷰로 보여주기
            2. 전체적인 디자인 하기
            3. S3 업로드 해보기
            */}
            <StyledFileLabel htmlFor="file">업로드</StyledFileLabel>
            <StyledFileInput
                id="file"
                type="file"
                accept="image/*"
                onChange={onFileChange}
            />
            <StyledTextLabel htmlFor="text">글쓰기</StyledTextLabel>
            <StyledTextInput
                id="text"
                type="text"
                placeholder="우리집 호두 너무 귀엽죵"
            />
            <button onClick={onSubmit}>제출</button>
        </StyledSection>
    );
};

export default Input;
