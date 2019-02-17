import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class AnnouncementAdd extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>+</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <Text>contents</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "50%",
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "lightgrey",
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    width: "90%",
    height: "15%",
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontSize: 32
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    width: "90%"
  }
});
