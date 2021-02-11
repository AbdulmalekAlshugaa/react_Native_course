import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AppButton from "../app/components/AppText/AppButton";

function welcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={6}
      source={require("../app/assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../app/assets/logo-red.png")}
        />
        <Text style={styles.tagline}>Sell what You Don't need </Text>
      </View>
      <View style={styles.containerStyle}>
        <AppButton title="Login"></AppButton>
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
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
  containerStyle: {
    width: "100%",
    justifyContent: "center",
    padding: 20,
  },
  tagline: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default welcomeScreen;
