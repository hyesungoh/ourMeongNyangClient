import React from "react";
import styled from "styled-components";
import { IImage } from "types/types";

interface IImageItemProps {
  imageData: IImage;
}

const duration = '0.5s';

const ImageCover = styled.div`
  width: 256px;
  height: 256px;
  position: relative;
  display: inline-block;
  border-radius: 15px;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
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
  transition-property: opacity;
  transition-duration: ${duration};
  
  :hover {
    opacity: 1;
    transition-property: opacity;
    transition-duration: ${duration};
  }
`;

const StyledSummary = styled.div`
  width: 100%;
  font-size: 16px;
  text-align: center;
  padding: 10%;
`;

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
