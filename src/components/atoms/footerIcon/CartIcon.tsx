import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../../../styles/colors";
import { FooterIconFactoryProps } from "./FooterIconFactory";

const CartIcon = (props: FooterIconFactoryProps) => {
  return (
    <Pressable onPress={props.onPress.bind(this, props.icontype)}>
      <AntDesign
        name="shoppingcart"
        size={24}
        color={props.isActive ? Colors.orangeColor : Colors.whiteColor}
      />
    </Pressable>
  );
};

export default CartIcon;

const styles = StyleSheet.create({});
