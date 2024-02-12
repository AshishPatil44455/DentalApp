import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import Heading from "../../Components/Heading";
import Colors from "../../Utils/Colors";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  {
    /* get categories List */
  }
  const getCategories = () => {
    GlobalApi.getCategories().then((res) => {
      setCategories(res?.categories);
    });
  };
  return (
    <View style={{ marginTop: 10 }}>
      <Heading text={"Categories"} isViewAll={true} />
      <FlatList
        data={categories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <View style={styles.iconContainer}>
              <Image
                source={{ uri: item?.icon?.url }}
                style={{ width: 30, height: 30 }}
              />
            </View>
            <Text style={{ fontFamily: "outfit-medium", marginTop: 5 }}>
              {item?.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: Colors.lightGrey,
    padding: 20,
    borderRadius: 50,
    marginRight: 10,
  },
});
