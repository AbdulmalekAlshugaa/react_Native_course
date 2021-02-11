import { FlatList } from "react-native";
import Screen from "../app/components/Screen";
import React, { useState } from "react"; // this a hook
import ListItem from "../app/components/ListItem";
import ListItemSeparator from "../app/components/ListItemSeparator";
import ListItemDeleteAction from "../app/components/ListItemDeleteAction";

const initalMessages = [
  {
    id: 0,
    title: "T1",
    description: "Description 1",
    image: require("../app/assets/myphoto.jpg"),
  },
  {
    id: 1,
    title: "T1",
    description: "Description 1",
    image: require("../app/assets/myphoto.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "Description 2",
    image: require("../app/assets/myphoto.jpg"),
  },
];

function MessagessScreen(props) {
  const [messages, setMessages] = useState(initalMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handelDelete = (message) => {
    // delete the message from the list
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => `key-${message.id}`} // i used this to avoid the warrning of items index
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description} // description
            image={item.image}
            onPress={() => {
              console.log("Message Selection ", item);
            }}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handelDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: "T1",
              description: "Description 1",
              image: require("../app/assets/myphoto.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

export default MessagessScreen;
