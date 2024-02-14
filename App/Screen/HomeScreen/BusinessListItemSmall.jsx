import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";

export default function BusinessListItemSmall({ business }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={Styles.container}
      onPress={() =>
        navigation.push("business-details", { business: business })
      }
    >
      <Image source={{ uri: business?.images[0].url }} style={Styles.image} />
      <View style={Styles.infoContainer}>
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 17,
          }}
        >
          {business?.name}
        </Text>
        <Text
          style={{
            color: Colors.primary,
            padding: 2,
            fontFamily: "outfit",
            fontSize: 13,
            backgroundColor: Colors.primaryLight,
            borderRadius: 3,
            alignSelf: "flex-start",
            paddingHorizontal: 8,
          }}
        >
          {business?.category.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  infoContainer: {
    display: "flex",
    padding: 7,
    gap: 3,
  },
  image: {
    width: 160,
    height: 100,
    borderRadius: 10,
    objectFit: "cover",
  },
});
