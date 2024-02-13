import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import CalendarPicker from "react-native-calendar-picker";
import Colors from "../../Utils/Colors";
import Heading from "../../Components/Heading";

export default function BookingModal({ hideModal }) {
  const [timeList, setTimeList] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [note, setNote] = useState();
  useEffect(() => {
    getTime();
  }, []);
  const getTime = (time) => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({ time: i + ":00 AM" });
      timeList.push({ time: i + ":30 AM" });
    }
    for (let i = 1; i <= 8; i++) {
      timeList.push({ time: i + ":00 PM" });
      timeList.push({ time: i + ":30 PM" });
    }
    setTimeList(timeList);
  };
  return (
    <ScrollView>
      <KeyboardAvoidingView style={{ padding: 20 }}>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginBottom: 20,
          }}
          onPress={() => hideModal()}
        >
          <Ionicons name="chevron-back" size={30} color="black" />
          <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>
            Book Appointment
          </Text>
        </TouchableOpacity>
        {/*Calendar Picker*/}
        <Heading text="Select Date" />
        <View style={styles.calendarContainer}>
          <CalendarPicker
            onDateChange={setSelectedDate}
            width={340}
            minDate={Date.now()}
            todayBackgroundColor={Colors.gray}
            todayTextStyle={{ color: Colors.white }}
            selectedDayColor={Colors.primary}
            selectedDayTextColor={Colors.white}
          />
        </View>
        {/*Time Select Section*/}
        <View style={{ marginTop: 20 }}>
          <Heading text="Select Time Slot" />
          <FlatList
            data={timeList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => setSelectedTime(item.time)}>
                <Text
                  style={[
                    selectedTime == item.time
                      ? styles.selectedTime
                      : styles.unSelectedTime,
                  ]}
                >
                  {item.time}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        {/*Note Section*/}
        <View style={{ paddingTop: 20 }}>
          <Heading text={"Write Note if any"} />
          <TextInput
            multiline={true}
            numberOfLines={5}
            placeholder="Note"
            style={styles.textInput}
            onChange={(text) => setNote(text)}
          />
        </View>
        {/*Confirm Button*/}
        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: Colors.primary,
              color: Colors.white,
              textAlign: "center",
              padding: 10,
              borderRadius: 10,
              marginTop: 20,
              fontSize: 18,
              fontFamily: "outfit",
            }}
          >
            Confirm & Book
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  calendarContainer: {
    backgroundColor: Colors.primaryLight,
    padding: 20,
    borderRadius: 10,
  },
  selectedTime: {
    padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 99,
    marginHorizontal: 5,
    backgroundColor: Colors.primary,
    color: Colors.white,
    fontWeight: "bold",
  },
  unSelectedTime: {
    padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 99,
    marginHorizontal: 5,
    color: Colors.primary,
  },
  textInput: {
    borderWidth: 1,
    padding: 20,
    textAlignVertical: "top",
    backgroundColor: Colors.white,
    borderRadius: 10,
    width: "100%",
    fontSize: 16,
    fontFamily: "outfit",
    borderColor: Colors.primary,
  },
});
