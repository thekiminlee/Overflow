import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

export default class MusicScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconHeader}>
          <Image
            source={require("../assets/images/music.png")}
            style={styles.icon}
          />
        </View>
        <View style={styles.displayContainer}>
          <View>
            <View style={styles.textInline}>
              <Text style={styles.containerTitlePrefix}>Fri</Text>
              <Text style={styles.containerTitleSuffix}>day</Text>
            </View>
            <View style={styles.fileContainer} />
          </View>
          <View>
            <View style={styles.textInline}>
              <Text style={styles.containerTitlePrefix}>Sun</Text>
              <Text style={styles.containerTitleSuffix}>day</Text>
            </View>
            <View style={styles.fileContainer} />
          </View>
          <View>
            <Text style={styles.containerTitleSuffix}>Other</Text>
            <View style={styles.fileContainer} />
          </View>
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
  displayContainer: {
    paddingTop: 20,
    width: "90%",
    height: "80%",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  fileContainer: {
    height: 120,
    backgroundColor: "lightgrey",
    borderRadius: 10
  },
  textInline: {
    flexDirection: "row"
  },
  containerTitlePrefix: {
    fontSize: 32,
    color: "black"
  },
  containerTitleSuffix: {
    fontSize: 32,
    color: "gold"
  }
});
