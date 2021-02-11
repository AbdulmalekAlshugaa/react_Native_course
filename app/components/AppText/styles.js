import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 20,
    color: "red",
  },
});

export default styles;
