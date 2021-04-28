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
                imageDatas: this.state.imageDatas.concat(
                    this.props.fetchImage()
                ),
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
