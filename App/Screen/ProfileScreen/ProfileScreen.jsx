import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";

export default function ProfileScreen() {
  const profieMenu = [
    {
      id: 1,
      name: "Home",
      icon: "home",
    },
    {
      id: 2,
      name: "My Appointments",
      icon: "bookmark",
    },
    {
      id: 3,
      name: "Contact Us",
      icon: "mail",
    },
    {
      id: 4,
      name: "Logout",
      icon: "log-out",
    },
  ];
  return (
    <View>
      <View
        style={{ padding: 20, paddingTop: 30, backgroundColor: Colors.primary }}
      >
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-bold",
            color: Colors.white,
          }}
        >
          Profile
        </Text>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Image
            source={require("../../../assets/favicon.png")}
            style={{ width: 90, height: 90, borderRadius: 50 }}
          />
          <Text
            style={{
              fontSize: 26,
              fontFamily: "outfit-bold",
              color: Colors.white,
              marginTop: 10,
            }}
          >
            Ashish Patil
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "outfit-bold",
              color: Colors.white,
              marginTop: 10,
            }}
          >
            ashishkumarpatil@gmail.com
          </Text>
        </View>
      </View>
      <View>
        <FlatList
          data={profieMenu}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                padding: 20,
                marginStart: 50,
                marginTop: 20,
              }}
            >
              <Entypo name={item.icon} size={44} color={Colors.primary} />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
