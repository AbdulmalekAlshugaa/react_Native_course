import React, { useState } from "react";
import { View, StyleSheet, Modal, Button, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import defualStyles from "../../config/styles";
import AppText from "./AppText";
import { TouchableWithoutFeedback } from "react-native";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

function AppPicker({ icon, items, onSelectedItem, placeholder, selectedItem }) {
  const [modalVisable, setModalVisable] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisable(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={25}
              color={defualStyles.colors.medim}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.lable : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            color={defualStyles.colors.medim}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisable} animationType="slide">
        <Screen>
          <Button title="Close " onPress={() => setModalVisable(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                lable={item.lable}
                onPress={() => {
                  setModalVisable(false);
                  onSelectedItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defualStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
