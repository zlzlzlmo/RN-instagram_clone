import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import IconFactory from "../atoms/icon/IconFactory";

const Header = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Image
          accessibilityHint="app-logo"
          style={styles.logo}
          source={require("../../assets/Instagram_logo.png")}
        />
      </Pressable>
      <View style={styles.iconContainer} accessibilityHint="header-icons">
        <IconFactory iconType="PLUS" />
        <IconFactory iconType="LIKE" />
        <IconFactory iconType="MESSENGER" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginLeft: 10,
  },
});
