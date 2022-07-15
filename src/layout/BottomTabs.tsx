import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "../styles/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import FooterIconFactory, {
  FooterIconType,
} from "../components/atoms/footerIcon/FooterIconFactory";

const BOTTOM_ICONS: FooterIconType[] = [
  "HOME",
  "SEARCH",
  "MEDIA",
  "CART",
  "PROFILE",
];
const BottomTabs = () => {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<FooterIconType>("HOME");

  const handleActiveTab = (type: FooterIconType) => {
    setActiveTab(type);
  };

  return (
    <View style={[styles.container, { height: insets.bottom + 30 }]}>
      {BOTTOM_ICONS.map((type, index) => (
        <FooterIconFactory
          key={index}
          icontype={type}
          onPress={handleActiveTab}
          isActive={activeTab === type}
        />
      ))}
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 1,
    width: "100%",
  },
});
