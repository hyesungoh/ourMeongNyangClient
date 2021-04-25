import React, { useState } from "react";
import styled from "styled-components";
import InputImagePreview from "./InputImagePreview";

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
    const [image, setImage] = useState<any>(null);
    const [imagePreview, setImagePreview] = useState<string>("");

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { files },
        } = e;
        const targetImage = files?.[0];

        setImage(targetImage);

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(targetImage as Blob);
    };

    const onSubmit = () => {
        const data = new FormData();
        data.append("image", image);

        for (let value of data.values()) {
            console.log(value);
        }
    };

    return (
        <StyledSection>
            <InputImagePreview />
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
