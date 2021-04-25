import React from "react";
import Summary from "components/Images/Summary";
import { IImage } from "types/types";
import * as style from "style/Images/ImageItemStyle";

interface IImageItemProps {
  imageData: IImage;
  degree: number;
}

interface IImageItemState {
  degree: number;
}

class ImageItem extends React.Component<IImageItemProps> {
  state: IImageItemState = {
    degree: this.props.degree,
  }

  render() {
      return (
        <style.ImageCover degree={this.state.degree}>
          <style.StyledImage src={this.props.imageData.imageURL} alt="" />
          <Summary text={this.props.imageData.summary} />
        </style.ImageCover>
      );
  }
}

export default ImageItem;
