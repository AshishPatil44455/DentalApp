import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./App/Screen/LoginScreen/Login";

import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavigation";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    outfit: require("./assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("./assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("./assets/fonts/Outfit-Bold.ttf"),
  });
  return (
    <View style={styles.container}>
      {/* Sign In Component */}

      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>

      {/* Sign Out Component */}

      <Login />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
});
