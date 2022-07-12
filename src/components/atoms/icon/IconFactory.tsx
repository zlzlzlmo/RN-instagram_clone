import { Text, View } from "react-native";
import React, { Component } from "react";
import PlusIcon from "./PlusIcon";
import LikeIcon from "./LikeIcon";
import MessengerIcon from "./MessengerIcon";
import CommentIcon from "./CommentIcon";

const OIconType = {
  plus: "PLUS",
  like: "LIKE",
  messenger: "MESSENGER",
  comment: "COMMENT",
} as const;

type IconType = typeof OIconType[keyof typeof OIconType];

interface IconProps {
  iconType: IconType;
}

export class IconFactory extends Component<IconProps> {
  renderElement(props: IconProps) {
    switch (props.iconType) {
      case OIconType.plus:
        return <PlusIcon />;
      case OIconType.like:
        return <LikeIcon />;
      case OIconType.messenger:
        return <MessengerIcon />;
      case OIconType.comment:
        return <CommentIcon />;
      default:
        throw new Error("wrong icon type");
    }
  }
  render() {
    return this.renderElement(this.props);
  }
}

export default IconFactory;
