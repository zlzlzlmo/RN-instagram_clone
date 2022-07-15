import { Text, View } from "react-native";
import React, { Component } from "react";
import HomeIcon from "./HomeIcon";
import CartIcon from "./CartIcon";
import MediaIcon from "./MediaIcon";
import SearchIcon from "./SearchIcon";
import ProfileIcon from "./ProfileIcon";

const OFooterIconType = {
  home: "HOME",
  search: "SEARCH",
  media: "MEDIA",
  profile: "PROFILE",
  cart: "CART",
} as const;

export type FooterIconType =
  typeof OFooterIconType[keyof typeof OFooterIconType];

export interface FooterIconFactoryProps {
  icontype: FooterIconType;
  onPress: (type: FooterIconType) => void;
  isActive: boolean;
}

class FooterIconFactory extends Component<FooterIconFactoryProps> {
  renderElement(props: FooterIconFactoryProps) {
    switch (props.icontype) {
      case OFooterIconType.home:
        return <HomeIcon {...props} />;
      case OFooterIconType.cart:
        return <CartIcon {...props} />;
      case OFooterIconType.media:
        return <MediaIcon {...props} />;
      case OFooterIconType.search:
        return <SearchIcon {...props} />;
      case OFooterIconType.profile:
        return <ProfileIcon {...props} />;
      default:
        throw new Error("wrong footer icon type");
    }
  }
  render() {
    return this.renderElement(this.props);
  }
}

export default FooterIconFactory;
