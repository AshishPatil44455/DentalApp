import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import PageHeading from "../../Components/PageHeading";
import GlobalApi from "../../Utils/GlobalApi";
import { useUser } from "@clerk/clerk-expo";
import BusinessListItem from "../BusinessListByCategoryScreen/BusinessListItem";

export default function BookingScreen() {
  //const { user } = useUser();
  const [bookingList, setBookingList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // user && getUserBookings();
  }, []);
  {
    /* Get user booking*/
  }

  const getUserBookings = async () => {
    setLoading(true);
    GlobalApi.getUserBookings(user.primaryEmailAddress.emailAddress).then(
      (res) => {
        console.log(res);
        setBookingList(res.bookings);
        setLoading(false);
      }
    );
  };

  return (
    <View style={{ padding: 20 }}>
      <PageHeading title="My Bookings" />

      <View>
        <FlatList
          data={bookingList}
          onRefresh={() => getUserBookings()}
          refreshing={loading}
          renderItem={({ item, index }) => (
            <BusinessListItem business={item.businessList} booking={item} />
          )}
        />
      </View>
    </View>
  );
}
