import styled from "styled-components";

export const ImageCover = styled.div`
    width: 100%;
    height: 100%;
`

export const PhotoFrame = styled.div<{ degree: number }>`
  width: 100%;
  height: 100%;

  padding: 5%;
  border: 1px solid lightgray;
  box-shadow: 0 0 5px 0 lightgray;

  border-radius: 20px;

  transform: rotate(${(props) => props.degree}deg);
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`;