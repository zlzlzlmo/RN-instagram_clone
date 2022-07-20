import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import IconFactory from "../components/atoms/icon/IconFactory";
import { RootTabScreenProps } from "../../navigation/types";

const Header = ({ navigation }: RootTabScreenProps<"HomeScreen">) => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Image
          accessibilityHint="app-logo"
          style={styles.logo}
          source={require("../assets/Instagram_logo.png")}
        />
      </Pressable>
      <View style={styles.iconContainer} accessibilityHint="header-icons">
        <IconFactory
          iconType="PLUS"
          onPress={() => navigation.push("NewPostScreen")}
        />
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
    paddingHorizontal: 20,
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
