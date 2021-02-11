import React from "react";
import { Text } from "react-native";
import styles from "../AppText/styles";
import defualStyles from "../../../config/styles";

function AppText({ children, style }) {
  // childern here can be used like a varables that developer can pass a value to it in other class or pages
  // proms
  return <Text style={[defualStyles.text, style]}>{children}</Text>;
}

export default AppText;
