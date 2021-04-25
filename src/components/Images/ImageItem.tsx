import React from "react";
import styled, { keyframes } from "styled-components";
import { IImage } from "types/types";

const opacityDuration = 0.5;
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

const SummaryCover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.3);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  opacity: 0;
  transition: opacity ${opacityDuration}s;

  :hover {
    opacity: 1;
    transition: opacity ${opacityDuration}s;
  }
`;

const StyledSummary = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  user-select: none;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 0 40px 20px rgba(255, 255, 255, 0.5);
`;

interface IImageItemProps {
  imageData: IImage;
}

function ImageItem(props: IImageItemProps) {
  return (
    <ImageCover>
      <StyledImage src={props.imageData.imageURL} alt="" />
      <SummaryCover>
        <StyledSummary>{props.imageData.summary}</StyledSummary>
      </SummaryCover>
    </ImageCover>
  );
}

export default ImageItem;
