import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ListItem from "components/Images/ListItem";
import { Loader, EndMessage } from "components/Images/Scroll";
import { IImage } from "types/types";

const randomDegree = (): number => {
  return Math.random() * 10 - 5;
};

interface IImageListProps {
  fetchImage(): Promise<IImage[]>;
  displayMax: number;
  onceFetchCount: number;
}

interface IImageListState {
  imageDatas: IImage[];
  isEnded: boolean;
}

class ImageList extends React.Component<IImageListProps> {
  state: IImageListState = {
    imageDatas: [],
    isEnded: false,
  };

  fetchMoreImages = () => {
    this.props.fetchImage().then((response: IImage[]) => {
      if (response.length < this.props.onceFetchCount) {
        this.setState({ isEnded: true });
        if (response.length === 0 || response[0].id === -1) return;
      }
      this.setState({
        imageDatas: this.state.imageDatas.concat(response),
      });
    });
  };

  isAllowMore = () => {
    return (
      this.state.imageDatas.length < this.props.displayMax &&
      !this.state.isEnded
    );
  };

  render() {
    return (
      <InfiniteScroll
        dataLength={this.state.imageDatas.length}
        next={this.fetchMoreImages}
        hasMore={this.isAllowMore()}
        loader={<Loader />}
        endMessage={<EndMessage />}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {this.state.imageDatas.map((imageData: IImage, index) => {
          return (
            <ListItem
              imageURL={imageData.imageURL}
              summary={imageData.summary}
              degree={randomDegree()}
              key={imageData.id}
            />
          );
        })}
      </InfiniteScroll>
    );
  }
}

export default ImageList;
