import React from "react";
import ImageItem from "components/Images/ImageItem";
import { IImage } from "types/types";

interface IImagesProps {
  imageDatas: IImage[];
}

const Images = (props: IImagesProps) => {
  return (
    <div>
      {props.imageDatas.map((imageData: IImage) => {
        return <ImageItem imageData={imageData} key={imageData.imageURL} />;
      })}
    </div>
  );
};

export default Images;
