import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React from "react";

import Colors from "../../Utils/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.ProfileMainContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={require("../../../assets/favicon.png")}
            style={styles.userImage}
          />
          <View>
            <Text style={{ color: Colors.white, fontFamily: "outfit" }}>
              Welcome,
            </Text>
            <Text
              style={{
                color: Colors.white,
                fontSize: 20,
                fontFamily: "outfit-medium",
              }}
            >
              {"Ashish Patil"}
            </Text>
          </View>
        </View>
        <MaterialCommunityIcons
          name="book-plus-outline"
          size={28}
          color="white"
        />
      </View>
      {/* Search bar section*/}
      <View style={styles.searchBarContainer}>
        <TextInput placeholder="Search" style={styles.textInput} />
        <FontAwesome
          name="search"
          style={styles.searchbtn}
          size={24}
          color={Colors.primary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  ProfileMainContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 15,
    backgroundColor: Colors.white,
    borderRadius: 7,
    width: "85%",
    fontSize: 16,
    fontFamily: "outfit",
  },
  searchBarContainer: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  searchbtn: {
    backgroundColor: Colors.white,
    borderRadius: 7,
    padding: 10,
  },
  rImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
