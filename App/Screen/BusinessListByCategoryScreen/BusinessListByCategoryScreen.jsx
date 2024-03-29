import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import GlobalApi from "../../Utils/GlobalApi";
import BusinessListItem from "./BusinessListItem";
import Colors from "../../Utils/Colors";
import PageHeading from "../../Components/PageHeading";

export default function BusinessListByCategoryScreen() {
  const navigation = useNavigation();
  const param = useRoute().params;
  const [businessList, setBusinessList] = useState([]);
  useEffect(() => {
    param && getBusinessByCategory();
  }, [param]);
  {
    /* Business List by category  */
  }
  const getBusinessByCategory = () => {
    GlobalApi.getBusinessListByCategory(param.category).then((res) => {
      setBusinessList(res.businessLists);
    });
  };
  return (
    <View style={{ padding: 20, paddingTop: 30 }}>
      <PageHeading title={param.category} />
      {businessList?.length > 0 ? (
        <FlatList
          style={{ marginTop: 15 }}
          data={businessList}
          renderItem={({ item, index }) => <BusinessListItem business={item} />}
        />
      ) : (
        <Text
          style={{
            marginTop: 25,
            textAlign: "center",
            fontSize: 20,
            fontFamily: "outfit-medium",
            color: Colors.gray,
          }}
        >
          No Listings Found
        </Text>
      )}
    </View>
  );
}
