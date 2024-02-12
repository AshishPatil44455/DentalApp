import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";

export default function Login() {
  <View style={{ alignItems: "center" }}>
    <Image
      source={require("../../../assets/login.png")}
      style={styles.loginImage}
    />
    <View style={styles.subContainer}>
      <Text
        style={{
          color: Colors.white,
          fontSize: 27,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Creating Healthy Smiles, One Appointment at a Time.
      </Text>
      <Text
        style={{
          color: Colors.white,
          fontSize: 18,
          textAlign: "center",
          marginTop: 20,
        }}
      >
        Crafting Exceptional Smiles, Setting the Standard in Dental Excellence
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate("HomeScreen")}
      >
        <Text
          style={{ color: Colors.primary, fontSize: 18, textAlign: "center" }}
        >
          Let's Get Started
        </Text>
      </TouchableOpacity>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    marginTop: 80,
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 10,
  },
  subContainer: {
    width: "100%",
    backgroundColor: Colors.primary,
    height: "70%",
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.white,
    borderRadius: 99,
    marginTop: 40,
  },
});
