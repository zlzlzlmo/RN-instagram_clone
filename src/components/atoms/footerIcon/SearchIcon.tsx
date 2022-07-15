import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../../../styles/colors";
import { FooterIconFactoryProps } from "./FooterIconFactory";
const SearchIcon = (props: FooterIconFactoryProps) => {
  return (
    <Pressable onPress={props.onPress.bind(this, props.icontype)}>
      <AntDesign
        name="search1"
        size={24}
        color={props.isActive ? Colors.orangeColor : Colors.whiteColor}
      />
    </Pressable>
  );
};

export default SearchIcon;

const styles = StyleSheet.create({});
