import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Modal from "react-native-modal";
import firebase from "firebase";
import "firebase/firestore";
import Announcement from "../components/home/Announcement";
import AnnouncementPopUp from "../components/home/AnnouncementPopUp";
import AnnouncementAdd from "../components/home/AnnouncementAdd";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.db = firebase.firestore();
    this.state = {
      announcements: [],
      announcementsRendering: [],
      currentAnnouncement: null,
      popupVisible: false,
      addItemVisible: false
    };

    //this.getAnnouncements = this.getAnnouncements.bind(this); // binding for setState. Use other binding method
  }

  componentWillMount() {
    this._getAnnouncements(); // retrieves all the announcements on loading
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Modal for announcement pop up. Default visiblity is set to false  */}
        {/* When modal is visible, an array of single announcement is passed as props */}
        <Modal
          style={styles.popup}
          isVisible={this.state.popupVisible}
          onBackdropPress={this._toggleAnnouncementPopUp}
          onBackButtonPress={this._toggleAnnouncementPopUp}
        >
          <AnnouncementPopUp announcement={this.state.currentAnnouncement} />
        </Modal>

        {/* Modal for announcement add. Default visiblity is set to false */}
        <Modal
          style={styles.popup}
          isVisible={this.state.addItemVisible}
          onBackdropPress={this._toggleAnnouncementAdd}
          onBackButtonPress={this._toggleAnnouncementAdd}
        >
          <AnnouncementAdd />
        </Modal>

        {/* Main content */}
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
          {this._renderAnnouncements()}
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button} />
        </View>
      </View>
    );
  }

  // Announcement rendering method. Render a list of announcements stored in array.
  // If the array is empty (no available announcements), then blank view with alert is rendered
  _renderAnnouncements = () => {
    if (
      this.state.announcementsRendering &&
      this.state.announcementsRendering.length
    ) {
      return (
        <ScrollView style={styles.content}>
          {this.state.announcementsRendering}
        </ScrollView>
      );
    }
    return (
      <View style={styles.contentEmpty}>
        <Text style={{ fontSize: 16, color: "lightgrey" }}>
          NO ANNOUNCEMENTS
        </Text>
      </View>
    );
  };

  // Database access. Retrieves data from firestore and stores them in array
  //   - First array stores raw data from DB
  //   - Second array stores rendering components
  _getAnnouncements = () => {
    this.db
      .collection("announcements")
      .get()
      .then(docs => {
        var counter = docs.size - 1;
        docs.forEach(doc => {
          var _title = doc.data().title;
          var _content = doc.data().content;
          var _date = doc.data().date;
          this.setState({
            announcements: [
              {
                title: _title,
                content: _content,
                date: _date
              },
              ...this.state.announcements
            ],
            announcementsRendering: [
              this._constructAnnouncement(counter--, _title, _content, _date),
              ...this.state.announcementsRendering
            ]
          });
        });
      });
  };

  // Creates a single Announcement touchable component for rendering
  _constructAnnouncement(id, _title, _content, _date) {
    return (
      <TouchableOpacity onPress={() => this._retrieveAnnouncement(id)} key={id}>
        <Announcement
          title={_title}
          content={_content}
          date={_date}
          announcementId={id}
        />
      </TouchableOpacity>
    );
  }

  // When user touches an announcement, sets corresponding announcement as prop for popup
  _retrieveAnnouncement = id => {
    this.setState({
      currentAnnouncement: this.state.announcements[id]
    });
    this._toggleAnnouncementPopUp();
  };

  // Modal visibility control functions
  _toggleAnnouncementPopUp = () =>
    this.setState({ popupVisible: !this.state.popupVisible });

  _toggleAnnouncementAdd = () =>
    this.setState({ addItemVisible: !this.state.addItemVisible });
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
  },
  contentEmpty: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    width: "90%",
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  popup: {
    justifyContent: "center",
    alignItems: "center"
  }
});
