import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
    position: sticky;
    top: 0;

    width: 100vw;
    height: 100px;
    background-color: ${({ theme }) => theme.colorNavy};
`;

const Nav = () => {
    return <StyledNav></StyledNav>;
};

export default Nav;
