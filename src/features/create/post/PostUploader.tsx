import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import uuid from "uuid";
import { getApps, initializeApp } from "firebase/app";
import firebaseConfig from "../../../../firebaseConfig";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const PostUploader = () => {
  const [image, setImage] = useState<any>(null);

  const uploadImageToFirebase = async (uri: string) => {
    console.log("uri : ", uri);

    const fileRef = ref(getStorage(), "image.jpg");

    const img = await fetch(uri);

    const blob = await img.blob();

    await uploadBytes(fileRef, blob);
    const url = await getDownloadURL(fileRef);
    console.log("url : ", url);
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      const storage = getStorage();
      const fileRef = ref(storage, "image.jpg");

      const img = await fetch(result.uri);
      const bytes = await img.blob();
      console.log("bytes : ", bytes);
      // uploadImageToFirebase(result.uri);
    }
  };

  useEffect(() => {
    const permission = async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    };

    permission();
  }, []);
  return (
    <View>
      <Text style={{ color: "white" }}>FormikPostUploader</Text>
      <TextInput
        multiline
        style={{ color: "white", fontSize: 20 }}
        placeholderTextColor={"white"}
        placeholder="입력"
      />
      <Button title="사진 dd업로드" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
};

export default PostUploader;

const styles = StyleSheet.create({});
