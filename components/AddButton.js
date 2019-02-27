import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class AddButton extends React.Component {
  render() {
    return (
      // <View style={styles.optionContainer}>
      <TouchableOpacity onPress={this.props.onPressFunction}>
        <View style={styles.optionButton}>
          <Text style={{ fontSize: 24, color: "lightgrey" }}>
            {this.props.msg}
          </Text>
        </View>
      </TouchableOpacity>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  optionContainer: {
    paddingRight: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "yellow"
  },
  optionButton: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center"
  }
});
