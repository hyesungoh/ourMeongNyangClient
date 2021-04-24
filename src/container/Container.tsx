import React from "react";
import styled from "styled-components";

import Input from "components/Input/Input";
import Images from "components/Images/Images";

const StyledMain = styled.main`
    width: 100vw;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colorWhite};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Container = () => {
    return (
        <StyledMain>
            <Input />
            <Images />
        </StyledMain>
    );
};

export default Container;
