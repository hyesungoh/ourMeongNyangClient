import React from "react";
import styled, { keyframes } from "styled-components";
import Summary from "components/Images/Summary";
import { IImage } from "types/types";

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

const ImageCover = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 20px;
  overflow: hidden;
  margin: 1%;

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

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`;

interface IImageItemProps {
  imageData: IImage;
}

function ImageItem(props: IImageItemProps) {
  return (
    <ImageCover>
      <StyledImage src={props.imageData.imageURL} alt="" />
      <Summary text={props.imageData.summary} />
    </ImageCover>
  );
}

export default ImageItem;
