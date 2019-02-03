import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import CalendarScreen from "../screens/CalendarScreen";
import SettingsScreen from "../screens/SettingsScreen";
import MusicScreen from "../screens/MusicStack";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? 'ios-home-outline'
          : "md-home"
      }
    />
  )
};

const CalendarStack = createStackNavigator({
  Calendar: CalendarScreen,
});

CalendarStack.navigationOptions = {
  tabBarLabel: "Calendar",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-calendar-outline" : "md-calendar"}
    />
  ),
};

const MusicStack = createStackNavigator({
  Music: MusicScreen,
});

MusicStack.navigationOptions = {
  tabBarLabel: "Music",
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? 'ios-musical-notes-outline' : 'md-musical-notes'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Contact",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-contact-outline" : "md-contact"}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  CalendarStack,
  MusicStack,
  SettingsStack
});
