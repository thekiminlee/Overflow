import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
} from "react-native";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconHeader}>
          <Image
            source={require("../assets/images/announcement.png")}
            style={styles.icon}
          />
        </View>
        <Image
          source={require("../assets/images/overflow.png")}
          style={styles.overflowBanner}
        />
        <View style={styles.contentContainer}>
          <ScrollView style={styles.content}>
            <Text>-</Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1.0)",
    flexDirection: "column",
    paddingTop: 24
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
  overflowBanner: {
    width: "100%",
    height: 200,
    resizeMode: "cover"
  },
  contentContainer: {
    flex: 1,
    alignItems: "center"
  },
  content: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    width: "90%",
    marginTop: 10,
    marginBottom: 10
  }
});
