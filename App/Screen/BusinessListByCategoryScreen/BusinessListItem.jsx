import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";

export default function BusinessListItem({ business }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={Styles.container}
      onPress={() =>
        navigation.push("Business-Details", { business: business })
      }
    >
      <Image source={{ uri: business?.images[0]?.url }} style={Styles.image} />

      <View style={Styles.subContainer}>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>
          {business?.name}
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
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  subContainer: {
    display: "flex",
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    objectFit: "cover",
  },
});
