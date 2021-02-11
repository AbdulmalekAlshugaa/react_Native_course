import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../app/components/Card";
import Screen from "../app/components/Screen";
import colors from "../config/colors";

// render a card her
const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../app/assets/myphoto.jpg"),
  },
  {
    id: 2,
    title: "Black T-shirt (Men)",
    price: 1000,
    image: require("../app/assets/myphoto.jpg"),
  },
  {
    id: 3,
    title: "Black T-shirt (Men)",
    price: 1500,
    image: require("../app/assets/myphoto.jpg"),
  },
];

function ListingScreen(props) {
  return (
    <Screen style={styles.Screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => `key-${listing.id}`}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  Screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
