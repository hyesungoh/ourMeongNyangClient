import React from "react";
import * as style from "style/Images/ImageStyle";

interface IImageProps {
    imageURL: string,
    degree: number,
}

const Image = (props: IImageProps) => {
    return (
      <style.ImageCover>
        <style.PhotoFrame degree={props.degree}>
          <style.StyledImage src={props.imageURL} alt="" />
        </style.PhotoFrame>
      </style.ImageCover>
    );
}

export default Image;