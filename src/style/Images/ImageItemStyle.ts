import styled, { keyframes } from "styled-components";

const sizeDuration = 0.5;
const size = {
    pc: 280,
    tablet: 230,
    mobile: 180,
}
const fadeDuration = 1.0;
const fadeIn = (degree: number) => keyframes`
  0% {
    transform: translate(0, 10%) rotate(${degree}deg);
    opacity: 0;
  }
  100%{
    transform: translate(0, 0) rotate(${degree}deg);
    opacity: 1;
  }
`;

export const ImageCover = styled.div<{degree: number}>`
  position: relative;
  display: inline-block;

  padding: 15px;
  border: 1px solid lightgray;
  box-shadow: 0 0 5px 0 lightgray;

  border-radius: 20px;
  overflow: hidden;
  margin: 10px;
  box-sizing:border-box;

  transform: rotate(${(props) => props.degree}deg);

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

  animation: ${(props) => fadeIn(props.degree)} ${fadeDuration}s;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`;
