import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

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
            <InputImagePreview imageURL={image} />
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
                onChange={onTextChange}
                placeholder="우리집 호두 너무 귀엽죵"
            />
            <button onClick={onSubmit}>제출</button>
        </StyledSection>
    );
};

export default Input;

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
