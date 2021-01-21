import React from "react";
import PropTypes from "prop-types";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    // parant contaienr
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain" // used to rezise the image to the desired positions
        style={styles.viewImageStyle}
        source={require("../app/assets/chair.jpg")}
      />
    </View>
    // her you can style you screen and render data
    // wrape the image into view container in order to remove the white color
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  viewImageStyle: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    top: 40,
    left: 30,
    position: "absolute",
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    top: 40,
    right: 30,
    position: "absolute",
  },
});

export default ViewImageScreen;

// style
