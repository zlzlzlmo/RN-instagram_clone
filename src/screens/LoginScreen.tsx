import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { INSTAGRAM_LOGO } from "../data/constants/logo";
import { Colors } from "../styles/colors";
import LoginForm from "../features/authentication/login/LoginForm";
import { RootTabScreenProps } from "../../navigation/types";

const LoginScreen = ({ navigation }: RootTabScreenProps<"LoginScreen">) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: INSTAGRAM_LOGO,
            height: 100,
            width: 100,
          }}
        />
      </View>
      <LoginForm navigation={navigation} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
});
