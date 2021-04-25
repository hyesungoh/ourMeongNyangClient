import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageItem from "components/Images/ImageItem";
import { IImage } from "types/types";

const randomDegree = (): number => {
  return Math.random() * 10 - 5;
};

interface IImagesProps {
  imageDatas: IImage[];
  fetchImage(): IImage[];
  displayMax: number;
}

interface IImagesState {
  imageDatas: IImage[];
}

class Images extends React.Component<IImagesProps> {
  state: IImagesState = {
    imageDatas: this.props.imageDatas,
  };

  fetchMoreImages = () => {
    setTimeout(() => {
      this.setState({
        imageDatas: this.state.imageDatas.concat(this.props.fetchImage()),
      });
    }, 500);
  };

  isDisplayMax = () => {
    return this.state.imageDatas.length <= this.props.displayMax;
  }

  render() {
    return (
      <InfiniteScroll
        dataLength={this.state.imageDatas.length}
        next={this.fetchMoreImages}
        hasMore={this.isDisplayMax()}
        loader={<p>Loading...</p>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {this.state.imageDatas.map((imageData: IImage, index) => {
          return (
            // key값은 임시로 넣어둔 것임 (나중에는 id값을 받아서 교체)
            <ImageItem
              imageData={imageData}
              degree={randomDegree()}
              key={index + imageData.imageURL}
            />
          );
        })}
      </InfiniteScroll>
    );
  }
}

export default Images;
