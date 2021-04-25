import React from "react";
import styled, { css } from "styled-components";

const Nav = () => {
    return (
        <StyledNav>
            <StyledH1>
                우리<strong>멍냥</strong>
            </StyledH1>
            <StyledDiv>
                <StyledSpan>개요</StyledSpan>
                <StyledSpan>업로드</StyledSpan>
                <StyledSpan>너네멍냥</StyledSpan>
            </StyledDiv>
        </StyledNav>
    );
};

export default Nav;

const UnderlineWhenHover = css`
    &::before {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;

        width: 100%;
        height: 2px;
        background-color: white;

        transform: scaleX(0);
        transition: transform 0.5s;
    }

    &:hover&::before {
        transform: scaleX(1);
    }
`;

const StyledNav = styled.nav`
    position: absolute;
    top: 0;

    width: 100vw;
    height: 70px;
    padding: 0px 2rem;
    background-color: ${({ theme }) => theme.colorNavy};

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledH1 = styled.h1`
    color: ${({ theme }) => theme.colorWhite};
    position: relative;
    font-weight: 300;
    cursor: pointer;

    ${UnderlineWhenHover}
`;

const StyledDiv = styled.div`
    color: ${({ theme }) => theme.colorWhite};
    font-weight: 300;

    display: flex;
    gap: 10px;
`;

const StyledSpan = styled.span`
    margin: 0px 4px;
    position: relative;
    cursor: pointer;

    ${UnderlineWhenHover}
`;
