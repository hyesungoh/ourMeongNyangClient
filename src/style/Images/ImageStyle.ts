import styled from "styled-components";

export const ImageCover = styled.div`
  width: 100%;
  height: 100%;
`;

export const PhotoFrame = styled.div<{ degree: number }>`
  width: 100%;
  height: 100%;

  padding: 5%;
  border: 1px solid lightgray;
  border-radius: 5%;
  box-shadow: 0 0 5px 0 lightgray;

  transform: rotate(${(props) => props.degree}deg);
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`;
