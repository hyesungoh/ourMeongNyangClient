import React from "react";
import styled from "styled-components";
import axios from "axios";
import Input from "components/Input/Input";
import ImageList from "components/Images/ImageList";
import { IImage } from "types/types";

const getURL = "https://swm-chatbot-9gsxzg-cydssl.run.goorm.io/chatbot/list";
const onceFetchCount = 10;
const displayMax = 60;
let index = 0;

interface IAxiosData {
    data: {
        data: IImage[];
    };
}

const fetchImage = async () => {
    let result = await axios
        .get(getURL, {
            params: { startIndex: index, endIndex: index + onceFetchCount },
        })
        .then((response: IAxiosData) => response.data.data)
        .catch((): IImage[] => [{ id: -1, imageURL: "None", summary: "None" }]);
    index += onceFetchCount;
    return result;
};

const Container = () => {
    return (
        <StyledMain>
            <Input />
            <ImageList
                fetchImage={fetchImage}
                displayMax={displayMax}
                onceFetchCount={onceFetchCount}
            />
        </StyledMain>
    );
};

export default Container;

const StyledMain = styled.main`
    width: 100vw;
    min-height: 100vh;
    height: auto;
    background-color: ${({ theme }) => theme.colorWhite};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
