import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../../../styles/colors";
import { FooterIconFactoryProps } from "./FooterIconFactory";

const ProfileIcon = (props: FooterIconFactoryProps) => {
  return (
    <Pressable onPress={props.onPress.bind(this, props.icontype)}>
      <AntDesign
        name="profile"
        size={24}
        color={props.isActive ? Colors.orangeColor : Colors.whiteColor}
      />
    </Pressable>
  );
};

export default ProfileIcon;

const styles = StyleSheet.create({});
