import React from "react";
import { View, StyleSheet, Image, ScrollView, Text } from "react-native";
import { Calendar, Agenda } from "react-native-calendars";

export default class CalendarScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconHeader}>
          <Image
            source={require("../assets/images/calendar.png")}
            style={styles.icon}
          />
        </View>
        <View style={styles.calendarContainer}>
          <Calendar style={styles.calendar} />
        </View>
        <View style={styles.eventContainer}>
          <ScrollView style={styles.event}>
            <Text>Hello</Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    flexDirection: "column",
    backgroundColor: "rgba(255,255,255,1.0)"
  },
  icon: {
    width: 40,
    height: 40
  },
  iconHeader: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "seagreen"
  },
  calendarContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  calendar: {
    height: 360,
    width: 400
  },
  eventContainer: {
    flex: 1,
    alignItems: "center"
  },
  event: {
    width: "90%",
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: "lightgrey",
    borderRadius: 10
  }
});
