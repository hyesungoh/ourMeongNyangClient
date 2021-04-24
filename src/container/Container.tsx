import React from "react";
import styled from "styled-components";

import Input from "components/Input/Input";
import Images from "components/Images/Images";

const StyledMain = styled.main`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    background-color: red;
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
