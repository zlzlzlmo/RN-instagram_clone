import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { INSTAGRAM_LOGO } from "../data/constants/logo";
import { Colors } from "../styles/colors";
import SignUpForm from "../features/authentication/signup/SignUpForm";

const SignUpScreen = () => {
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
      <SignUpForm />
    </View>
  );
};

export default SignUpScreen;

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
