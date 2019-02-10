import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default class Announcement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null
    };
  }

  componentWillMount() {
    this.setState({ id: this.props.announcementId });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.props.title}
          {this.props.announcementId}
        </Text>
        {/* <Text style={styles.content}>{this.props.date}</Text> */}
        <Text style={styles.content}>
          {this.sliceContent(this.props.content)}
        </Text>
      </View>
    );
  }

  sliceContent(content) {
    if (content.length > 70) {
      return content.substr(0, 70) + "......";
    }
    return content;
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: "lightgrey",
    justifyContent: "center"
  },
  title: {
    paddingRight: 10,
    paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 16
  },
  content: {
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 12
  }
});
