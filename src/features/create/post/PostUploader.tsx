import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { PLACEHOLDER_IMG } from "../../../datas/constant";
import { Colors } from "../../../styles/colors";
import { Divider } from "@rneui/base";

const PostUploader = () => {
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleImageUrl = (url: string) => {
    setImageUrl(imageUrl);
  };
  return (
    <>
      <View
        style={{
          margin: 20,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: PLACEHOLDER_IMG,
          }}
        />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <TextInput
            style={{ color: Colors.whiteColor, fontSize: 20 }}
            placeholder="Write a caption"
            placeholderTextColor={Colors.grayColor}
            multiline
          />
        </View>
      </View>
      <Divider width={0.2} orientation="vertical" />
      <TextInput
        style={{ color: Colors.whiteColor, fontSize: 18 }}
        placeholder="Enter Image Url"
        placeholderTextColor={Colors.grayColor}
        onChangeText={handleImageUrl}
      />
    </>
  );
};

export default PostUploader;

const styles = StyleSheet.create({});
