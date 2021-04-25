import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageItem from "components/Images/ImageItem";
import { IImage } from "types/types";

interface IImagesProps {
  imageDatas: IImage[];
  fetchImage(): IImage[];
  displayMax: number;
}

class Images extends React.Component<IImagesProps> {
  state: IImagesProps = this.props;

  fetchMoreImages = () => {
    setTimeout(() => {
      this.setState({
        imageDatas: this.state.imageDatas.concat(this.state.fetchImage()),
      });
    }, 500);
  };

  isDisplayMax = () => {
    return this.state.imageDatas.length <= this.state.displayMax;
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
            <ImageItem imageData={imageData} key={index + imageData.imageURL} />
          );
        })}
      </InfiniteScroll>
    );
  }
}

export default Images;
