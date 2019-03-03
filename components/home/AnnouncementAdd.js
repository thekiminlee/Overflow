import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class AnnouncementAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>add announcement</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <TextInput
              style={styles.textInputTitle}
              placeholder={"  title"}
              value={this.state.title}
              onChangeText={value => this.setState({ title: value })}
            />
            <TextInput
              style={styles.textInputContent}
              placeholder={"  content"}
              multiline={true}
              numberOfLines={8}
              value={this.state.content}
              onChangeText={value => this.setState({ content: value })}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() =>
                this.props.onPressFunction(
                  this.state.title,
                  this.state.content,
                  this.props.toggleFunction,
                  this.props.database,
                  this._generateHash
                )
              }
            >
              <View style={styles.optionButton}>
                <Text style={{ fontSize: 14, color: "lightgrey" }}>OK</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  // generates a random 10 character string for document id
  _generateHash() {
    var hash = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,-!?";

    for (var i = 0; i < 10; i++) {
      hash += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return hash;
  }

  _updateTitle(value) {
    this.setState({ title: value });
  }

  _updateContent(value) {
    this.setState({ content: value });
  }
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 280,
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
    justifyContent: "center"
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "lightgrey"
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center"
  },
  content: {
    width: "90%"
  },
  textInputTitle: {
    borderColor: "grey",
    height: 25,
    width: 300,
    borderWidth: 1
  },
  textInputContent: {
    marginTop: 10,
    borderColor: "grey",
    width: 300,
    borderWidth: 1
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "flex-end"
  },
  optionButton: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 7
  }
});
