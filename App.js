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

// create a list of items
const categories = [
  { lable: "Furnisher", value: 1 },
  { lable: "Clothing", value: 2 },
  { lable: "Electronic", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectedItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />

      <AppTextInput icon="email" placeholder="email" />
    </Screen>
  );
}
