import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../app/components/AppText";
import ListItem from "../app/components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../app/assets/myphoto.jpg")}
      />
      <View style={styles.detailsContaienr}>
        <AppText style={styles.texttitle}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="Abdulmalik"
            subTitle="6 Listings"
            image={require("../app/assets/myphoto.jpg")}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 301,
  },
  detailsContaienr: {
    padding: 20,
  },
  texttitle: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.black,
  },
  price: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.secondary,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 30,
  },
});

export default ListingDetailsScreen;
