import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "../Screen/HomeScreen/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import BusinessListByCategoryScreen from "../Screen/BusinessListByCategoryScreen/BusinessListByCategoryScreen";
import BusinessDetailsScreen from "../Screen/BusinessDetailsScreen/BusinessDetailsScreen";

const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Business-List"
        component={BusinessListByCategoryScreen}
      />
      <Stack.Screen name="Business-Details" component={BusinessDetailsScreen} />
    </Stack.Navigator>
  );
}
