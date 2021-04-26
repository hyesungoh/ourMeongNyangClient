import styled, { keyframes } from "styled-components";
import { ImageCover } from "style/Images/ImageStyle";
import { SummaryCover } from "style/Images/SummaryStyle";

const sizeDuration = 0.5;
const size = {
    pc: 280,
    tablet: 230,
    mobile: 180,
};
const fadeDuration = 1.0;
const fadeIn = keyframes`
  0% {
    transform: translate(0, 10%);
    opacity: 0;
  }
  100%{
    transform: translate(0, 0);
    opacity: 1;
  }
`;
const hoverDuration = 0.5;

export const StyledListItem = styled.div`
    position: relative;
    display: inline-block;
    overflow: hidden;
    padding: 10px;

    /* PC size */
    @media all and (min-width: 1024px) {
        width: ${size.pc}px;
        height: ${size.pc}px;
        transition: width ${sizeDuration}s, height ${sizeDuration}s;
    }
    /* tablet size */
    @media all and (min-width: 768px) and (max-width: 1023px) {
        width: ${size.tablet}px;
        height: ${size.tablet}px;
        transition: width ${sizeDuration}s, height ${sizeDuration}s;
    }
    /* mobile size */
    @media all and (max-width: 767px) {
        width: ${size.mobile}px;
        height: ${size.mobile}px;
        transition: width ${sizeDuration}s, height ${sizeDuration}s;
    }

    animation: ${fadeIn} ${fadeDuration}s;

    ${ImageCover} {
        transform: scale(1, 1) translate(0, 0);
        transition: transform ${hoverDuration}s;
    }

    ${SummaryCover} {
        transform: translate(0, 0);
        transition: transform ${hoverDuration}s;
    }

    :hover {
        ${ImageCover} {
            transform: scale(0.7, 0.7) translate(0, -15%);
            transition: transform ${hoverDuration}s;
        }
        ${SummaryCover} {
            transform: translate(0, -70%);
            transition: transform ${hoverDuration}s;
        }
    }
`;
