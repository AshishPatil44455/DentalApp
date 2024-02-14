import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/stack";
import BookingScreen from "../Screen/BookingScreen/BookingScreen";
import BusinessDetailsScreen from "../Screen/BusinessDetailsScreen/BusinessDetailsScreen";

const Stack = createNativeStackNavigator();

export default function BookingNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Booking" component={BookingScreen} />

      <Stack.Screen name="Business-Detail" component={BusinessDetailsScreen} />
    </Stack.Navigator>
  );
}
