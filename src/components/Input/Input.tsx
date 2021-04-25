import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

import { storageService } from "firebase/index";
import InputFile from "./InputFile";
import InputText from "./InputText";

const Input = () => {
    const [image, setImage] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

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
            <InputFile image={image} setImage={setImage} />
            <InputText setText={setText} onSubmit={onSubmit} />
        </StyledSection>
    );
};

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
