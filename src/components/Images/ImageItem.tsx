import React from "react";
import styled from "styled-components";
import { IImage } from "types/types";

const opacityDuration = 0.5;
const sizeDuration = 0.5;
const size = {
    pc: 320,
    tablet: 240,
    mobile: 180,
}

const ImageCover = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 15px;
  overflow: hidden;

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

  background-color: rgba(255, 255, 255, 0.5);
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
  text-align: center;
  padding: 10%;
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
