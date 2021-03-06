import React from "react";
import PropTypes from "prop-types";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    // parant contaienr
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
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
    top: 40,
    left: 30,
    position: "absolute",
  },
  deleteIcon: {
    top: 40,
    right: 30,
    position: "absolute",
  },
});

export default ViewImageScreen;

// style
