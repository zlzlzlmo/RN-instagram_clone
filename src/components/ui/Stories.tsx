import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { USERS } from "../../mocks/user-mock-data";
import { Colors } from "../../styles/colors";
import StringTransformation from "../../util/transformation/str-transformation";

const Stories = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {USERS.map(({ user, image }, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Image
              style={styles.userImage}
              source={{
                uri: image,
              }}
            />
            <Text style={styles.userName}>
              {new StringTransformation(user).slice(10)}
            </Text>
          </View>
        ))}
      </ScrollView>
      <Text>Stories</Text>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    marginBottom: 13,
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 999,
    resizeMode: "contain",
    borderWidth: 3,
    borderColor: Colors.orangeColor,
    marginLeft: 6,
  },
  userName: {
    color: Colors.whiteColor,
    textAlign: "center",
  },
});
