import styled, { keyframes } from "styled-components";

const sizeDuration = 0.5;
const size = {
    pc: 320,
    tablet: 240,
    mobile: 180,
}
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

export const ImageCover = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 20px;
  overflow: hidden;
  margin: 10px;
  box-sizing:border-box;
  border-top: 5px solid #fff;

  /* PC size */
  @media all and (min-width: 1024px) {
    width: ${size.pc}px;
    height: ${size.pc}px;
    transition: all ${sizeDuration}s;
  }
  /* tablet size */
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: ${size.tablet}px;
    height: ${size.tablet}px;
    transition: all ${sizeDuration}s;
  }
  /* mobile size */
  @media all and (max-width: 767px) {
    width: ${size.mobile}px;
    height: ${size.mobile}px;
    transition: all ${sizeDuration}s;
  }
  animation: ${fadeIn} ${fadeDuration}s;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`;
