import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../../../styles/colors";
import { FooterIconFactoryProps } from "./FooterIconFactory";

const MediaIcon = (props: FooterIconFactoryProps) => {
  return (
    <Pressable onPress={props.onPress.bind(this, props.icontype)}>
      <AntDesign
        name="videocamera"
        size={24}
        color={props.isActive ? Colors.orangeColor : Colors.whiteColor}
      />
    </Pressable>
  );
};

export default MediaIcon;

const styles = StyleSheet.create({});
