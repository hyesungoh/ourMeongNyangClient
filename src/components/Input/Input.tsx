import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import axios from "axios";

import { storageService } from "firebase/index";
import InputFile from "./InputFile";
import InputText from "./InputText";
import InputLoading from "./InputLoading";

const Input = () => {
    const [image, setImage] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onSubmit = async () => {
        if (image !== "") {
            if (text.length < 3) {
                alert("3글자 이상 작성해주세요 !!");
                return;
            }

            setIsLoading(true);
            const fileRef = storageService.ref().child(`${uuid()}`);
            try {
                const response = await fileRef.putString(
                    image as string,
                    "data_url"
                );

                const fileURL = await response.ref
                    .getDownloadURL()
                    .then((res) => {
                        setIsLoading(false);
                        return res;
                    });

                // using axios
                await axios.post(
                    "https://swm-chatbot-9gsxzg-cydssl.run.goorm.io/chatbot/create",
                    { data: { imageURL: fileURL, summary: text } }
                );

                setImage("");
                setText("");
            } catch (error) {
                alert(error);
            }
        } else {
            alert("이미지를 업로드 후에 해주세용 !");
        }
    };

    return (
        <StyledSection>
            <InputLoading isLoading={isLoading} />
            <InputFile image={image} setImage={setImage} />
            <InputText text={text} setText={setText} onSubmit={onSubmit} />
        </StyledSection>
    );
};

export default Input;

export const StyledSection = styled.section`
    position: relative;
    overflow: hidden;

    width: 50vw;
    height: 60vh;
    background-color: ${({ theme }) => theme.colorWhite};
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 6rem 0px 8rem 0px;

    @media screen and (max-width: ${({ theme }) => theme.sizeTablet}) {
        width: 70vw;
        height: 60vh;
        flex-direction: column;
        margin: 3rem 0px 4rem 0px;
    }

    @media screen and (max-width: ${({ theme }) => theme.sizeMobile}) {
        width: 85vw;
        height: 60vh;
        flex-direction: column;
        margin: 3rem 0px 4rem 0px;
    }
`;
