import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";

export default function BusinessListItemSmall({ business }) {
  return (
    <View style={Styles.container}>
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
    </View>
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
