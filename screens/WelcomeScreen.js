import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function welcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../app/assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../app/assets/logo-red.png")}
        />
        <Text styles={styles.textStyle}>Sell what You Don't need </Text>
      </View>

      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    // give some attrsr
    height: 70,
    width: "100%",
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    // give some attrsr
    height: 70,
    width: "100%",
    backgroundColor: "#4ecdc4",
  },
  logo: {
    // give some attrsr
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  textStyle: {
    height: 100,
    width: 100,
  },
});

export default welcomeScreen;
