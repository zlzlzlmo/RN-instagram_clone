import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import React from "react";
import { PLACEHOLDER_IMG } from "../../../datas/constant";
import { Colors } from "../../../styles/colors";
import { Divider } from "@rneui/base";
import { RootTabScreenProps } from "../../../../navigation/types";
import usePostUpload from "./hooks/usePostUpload";

const PostUploader = ({
  navigation,
}: Partial<RootTabScreenProps<"NewPostScreen">>) => {
  const {
    imageUrl,
    handleCaption,
    handleImageUrl,
    isValidImageUrl,
    uploadPost,
  } = usePostUpload();

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
            uri: isValidImageUrl ? imageUrl : PLACEHOLDER_IMG,
          }}
        />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <TextInput
            style={{ color: Colors.whiteColor, fontSize: 20 }}
            placeholder="Write a caption"
            placeholderTextColor={Colors.grayColor}
            multiline
            onChangeText={handleCaption}
          />
        </View>
      </View>
      <Divider width={0.2} orientation="vertical" />
      <TextInput
        style={{ color: Colors.whiteColor, fontSize: 18 }}
        placeholder="Enter Image Url"
        placeholderTextColor={Colors.grayColor}
        autoCapitalize="none"
        onChangeText={handleImageUrl}
      />
      {!isValidImageUrl && (
        <Text style={{ fontSize: 10, color: "red" }}>
          This is invalid url. please check it again.
        </Text>
      )}
      <View style={{ marginTop: 20 }}>
        <Button
          title="Share"
          disabled={!isValidImageUrl}
          onPress={uploadPost}
        />
      </View>
    </>
  );
};

export default PostUploader;

const styles = StyleSheet.create({});
