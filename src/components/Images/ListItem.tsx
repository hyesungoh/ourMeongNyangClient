import React from "react";
import Image from "components/Images/Image";
import Summary from "components/Images/Summary";
import { StyledListItem } from "style/Images/ListItemStyle";

interface IImageItemProps {
  imageURL: string;
  summary: string;
  degree: number;
}

interface IListItemState {
  degree: number;
}

class ListItem extends React.Component<IImageItemProps> {
  state: IListItemState = {
    degree: this.props.degree,
  };

  render() {
    return (
      <StyledListItem>
        <Image imageURL={this.props.imageURL} degree={this.state.degree} />
        <Summary text={this.props.summary} />
      </StyledListItem>
    );
  }
}

export default ListItem;
