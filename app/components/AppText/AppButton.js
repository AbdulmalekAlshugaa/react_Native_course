import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../../config/colors";

function AppButton({ title, onPress, color = "primary", fontSize = 14 }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: colors[color] },
        { fontSize: fontSize[fontSize] },
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // implement button style
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
    width: "100%",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
