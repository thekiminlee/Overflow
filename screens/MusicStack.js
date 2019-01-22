import React from "react";
import { Text} from "react-native";

export default class MusicScreen extends React.Component {
    static navigationOptions = {
        title: 'Music',
    };

    render() {
        return (
            <Text>This is a music scrren</Text>
        );
    }
}