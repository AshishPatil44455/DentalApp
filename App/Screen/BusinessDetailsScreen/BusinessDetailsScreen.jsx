import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../Utils/Colors";
import Heading from "../../Components/Heading";
import BusinessPhotos from "./BusinessPhotos";

export default function BusinessDetailsScreen() {
  const param = useRoute().params;
  const [business, setBusiness] = useState(param.business);
  const [isReadMore, setIsReadMore] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {}, []);
  return (
    business && (
      <View>
        <ScrollView style={{ height: "91.2%" }}>
          <TouchableOpacity
            style={Styles.backBtnContainer}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={30} color="white" />
          </TouchableOpacity>
          <Image
            source={{ uri: business?.images[0]?.url }}
            style={{ height: 300, width: "100%" }}
          />
          <View style={Styles.infoContainer}>
            <Text style={{ fontFamily: "outfit-bold", fontSize: 25 }}>
              {business?.name}
            </Text>
            <View style={Styles.subContainer}>
              <Text
                style={{
                  fontFamily: "outfit",
                  color: Colors.primary,
                  backgroundColor: Colors.primaryLight,
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                {business?.category.name}
              </Text>
            </View>
            {/* Horizontal Line */}
            <View
              style={{
                borderWidth: 0.4,
                borderColor: Colors.gray,
                marginTop: 20,
                marginBottom: 20,
              }}
            ></View>
            {/* About Me */}
            <View>
              <Heading text={"About"} />
              <Text
                style={{
                  fontFamily: "outfit",
                  color: Colors.gray,
                  fontSize: 16,
                  lineHeight: 28,
                }}
                numberOfLines={isReadMore ? 40 : 5}
              >
                {business?.about}
              </Text>
              <TouchableOpacity onPress={() => setIsReadMore(!isReadMore)}>
                <Text
                  style={{
                    color: Colors.primary,
                    fontSize: 16,
                    fontFamily: "outfit-medium",
                  }}
                >
                  {isReadMore ? "Read Less" : "Read More"}
                </Text>
              </TouchableOpacity>
            </View>
            {/* Horizontal Line */}
            <View
              style={{
                borderWidth: 0.4,
                borderColor: Colors.gray,
                marginTop: 20,
                marginBottom: 20,
              }}
            ></View>
            <BusinessPhotos business={business} />
          </View>
        </ScrollView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            margin: 8,
            gap: 8,
          }}
        >
          <TouchableOpacity style={Styles.messageBtn}>
            <Text
              style={{
                fontFamily: "outfit-medium",
                textAlign: "center",
                color: Colors.primary,
                fontSize: 18,
              }}
            >
              Message
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.bookingBtn}>
            <Text
              style={{
                fontFamily: "outfit-medium",
                textAlign: "center",
                color: Colors.white,
                fontSize: 18,
              }}
            >
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  );
}

const Styles = StyleSheet.create({
  backBtnContainer: {
    position: "absolute",
    padding: 20,
    zIndex: 10,
  },
  infoContainer: {
    padding: 20,
    display: "flex",
    gap: 7,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  messageBtn: {
    backgroundColor: Colors.white,
    padding: 15,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: Colors.primary,
    flex: 1,
  },
  bookingBtn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: Colors.primary,
    flex: 1,
  },
});
