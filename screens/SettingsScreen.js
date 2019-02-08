import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconHeader}>
          <Image
            source={require("../assets/images/contact.png")}
            style={styles.icon}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    flex: 1,
    alignItems: "center",
    backgroundColor: "white"
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
  }
});
