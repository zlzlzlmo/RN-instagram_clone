import { Timestamp } from "firebase/firestore";
import { useMemo, useState } from "react";
import { PLACEHOLDER_IMG } from "../../../../datas/constant";
import ValidatorFactory from "../../../../util/validator/validatorFactory";
import CurrentUserService from "../../../../service/currentUserService";
import PostService from "../../../../service/postService";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

const usePostUpload = () => {
  const [imageUrl, setImageUrl] = useState<string>(PLACEHOLDER_IMG);
  const [caption, setCaption] = useState("");
  const navigation = useNavigation<any>();

  const handleImageUrl = (url: string) => {
    setImageUrl(url);
  };

  const handleCaption = (text: string) => {
    setCaption(text);
  };

  const isValidImageUrl = useMemo(() => {
    return ValidatorFactory.createValidator("url", imageUrl).isValid();
  }, [imageUrl]);

  const uploadPost = async () => {
    const currentUser = await new CurrentUserService().getCurrentUser();

    if (!currentUser) return;

    try {
      await new PostService().uploadPost({
        imageUrl,
        user: currentUser.userName,
        profile_picture: currentUser.profile_picture,
        owner_uid: currentUser.owner_uid,
        caption,
        createdAt: Timestamp.now(),
        likes: 0,
        likes_by_users: [],
        comments: [],
      });

      navigation.navigate("HomeScreen");
    } catch (error) {
      Alert.alert("failed to upload");
    }
  };

  return {
    handleImageUrl,
    handleCaption,
    isValidImageUrl,
    imageUrl,
    uploadPost,
  };
};

export default usePostUpload;
