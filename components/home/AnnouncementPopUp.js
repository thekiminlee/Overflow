import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class AnnouncementPopUp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.announcement.title}</Text>
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
  }
});
