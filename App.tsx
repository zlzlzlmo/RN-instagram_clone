import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SignedInStack } from "./navigation";
import AuthNavigation from "./navigation/AuthNavigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthNavigation />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
