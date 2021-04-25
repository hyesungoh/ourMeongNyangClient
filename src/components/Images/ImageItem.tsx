import Summary from "components/Images/Summary";
import { IImage } from "types/types";
import * as style from "style/Images/ImageItemStyle";

interface IImageItemProps {
  imageData: IImage;
}

function ImageItem(props: IImageItemProps) {
  return (
    <style.ImageCover>
      <style.StyledImage src={props.imageData.imageURL} alt="" />
      <Summary text={props.imageData.summary} />
    </style.ImageCover>
  );
}

export default ImageItem;
