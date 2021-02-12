import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, TextInput, Switch } from "react-native";
import ViewImageScreen from "./screens/ViewImageScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import AppText from "./app/components/AppText/index";
import AppButton from "./app/components/AppText/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./screens/ListingDetailsScreen";
import MessagessScreen from "./screens/MessagessScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./screens/AccountScreen";
import ListingScreen from "./screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import Picker from "@react-native-picker/picker";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./screens/LoginScreen";

// create a list of items

export default function App() {
  return <LoginScreen />;
}
