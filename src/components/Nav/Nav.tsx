import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import { StyledSection } from "components/Input/Input";

const Nav = () => {
    const [yIndex, setYIndex] = useState<number>(0);
    const [inputRef, setInputRef] = useState<Element | null>(null);
    const [imageRef, setImageRef] = useState<Element | null>(null);

    const onNavClick = (el: Element | null) => {
        const blockByEl = el === imageRef ? "start" : "center";
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: blockByEl });
        }
    };

    useEffect(() => {
        const tempInputRef = document.querySelector(StyledSection);
        setInputRef(tempInputRef);

        const tempImageRef = document.querySelector(
            ".infinite-scroll-component"
        );
        setImageRef(tempImageRef);
    }, []);

    return (
        <StyledNav>
            <StyledH1>
                우리<strong>멍냥</strong>
            </StyledH1>
            <StyledDiv>
                <StyledSpan onClick={() => onNavClick(inputRef)}>
                    업로드
                </StyledSpan>
                <StyledSpan onClick={() => onNavClick(imageRef)}>
                    너네멍냥
                </StyledSpan>
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
    position: sticky;
    z-index: 9;
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
