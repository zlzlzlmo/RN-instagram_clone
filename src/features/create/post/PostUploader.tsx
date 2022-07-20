import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { PLACEHOLDER_IMG } from "../../../datas/constant";
import { Colors } from "../../../styles/colors";
import { Divider } from "@rneui/base";
import UrlRegEx from "../../../util/regex/urlRegEx";
import { RootTabScreenProps } from "../../../../navigation/types";
import validUrl from "valid-url";

const PostUploader = ({
  navigation,
}: Partial<RootTabScreenProps<"NewPostScreen">>) => {
  const [imageUrl, setImageUrl] = useState<string>(PLACEHOLDER_IMG);
  const [isValidForm, setIsValidForm] = useState<boolean>(false);

  const handleImageUrl = (url: string) => {
    setImageUrl(url);
  };

  useEffect(() => {
    const isUrl = new UrlRegEx(imageUrl).isValid();
    setIsValidForm(isUrl);
  }, [imageUrl]);

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
            uri: validUrl.isUri(imageUrl) ? imageUrl : PLACEHOLDER_IMG,
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
        autoCapitalize="none"
        onChangeText={handleImageUrl}
      />
      {!new UrlRegEx(imageUrl).isValid() && (
        <Text style={{ fontSize: 10, color: "red" }}>
          This is invalid url. please check it again.
        </Text>
      )}
      <View style={{ marginTop: 20 }}>
        <Button
          title="Share"
          disabled={!isValidForm}
          onPress={() => navigation?.goBack()}
        />
      </View>
    </>
  );
};

export default PostUploader;

const styles = StyleSheet.create({});
