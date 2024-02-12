import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Heading from "../../Components/Heading";
import GlobalApi from "../../Utils/GlobalApi";
import BusinessListItemSmall from "./BusinessListItemSmall";

export default function BusinessList() {
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    getBusinessList();
  }, []);
  const getBusinessList = () => {
    GlobalApi.getBusinessList().then((res) => {
      setBusinessList(res?.businessLists);
    });
  };
  return (
    <View style={{ marginTop: 20 }}>
      <Heading text={"Popular Services"} isViewAll={true} />

      <FlatList
        data={businessList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 20 }}>
            <BusinessListItemSmall business={item} />
          </View>
        )}
      />
    </View>
  );
}
