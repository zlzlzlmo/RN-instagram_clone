import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IconFactory from "../../atoms/icon/IconFactory";

const PostFooter = () => {
  return (
    <View>
      <IconFactory iconType="LIKE" />
      <IconFactory iconType="COMMENT" />
      <IconFactory iconType="LIKE" />
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({});
