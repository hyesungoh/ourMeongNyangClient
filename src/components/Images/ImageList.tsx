import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ListItem from "components/Images/ListItem";
import { Loader, EndMessage } from "components/Images/Scroll";
import { IImage } from "types/types";

const randomDegree = (): number => {
  return Math.random() * 10 - 5;
};

interface IImageListProps {
  imageDatas: IImage[];
  fetchImage(): IImage[];
  displayMax: number;
}

interface IImageListState {
  imageDatas: IImage[];
}

class ImageList extends React.Component<IImageListProps> {
  state: IImageListState = {
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
  };

  render() {
    return (
      <InfiniteScroll
        dataLength={this.state.imageDatas.length}
        next={this.fetchMoreImages}
        hasMore={this.isDisplayMax()}
        loader={Loader}
        endMessage={EndMessage}
      >
        {this.state.imageDatas.map((imageData: IImage, index) => {
          return (
            // key값은 임시로 넣어둔 것임 (나중에는 id값을 받아서 교체)
            <ListItem
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

export default ImageList;
