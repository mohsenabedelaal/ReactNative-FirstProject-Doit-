import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View,
} from "react-native";
import Constants from "expo-constants";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initalMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "dskljaldsl;akl;dka;ldk;slakdl;kasl;dkl;askdl;kal;skdl;kal;skdl;kasl;dkl;sakl;dkl;askdl;kasl;kdl;ak;ldksl;akdl;askl;dkl;aksdl;akl;dk;adlaks;dladsaldk;laksl;dka;",
    description: "dlskal;dksl;akd;lakl;dskl;aksl;dkal;skd;laksl;dkl;askl;dkl;askl;dklaskd;lkas;ldk;laskl;dkal;skd;laks;ldkl;askdl;ak;lskd;laks;ldk;alksdl;kasl;kdl;ak;lsdkasl;kd;laksl;dsa",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/mosh.jpg"),
  },
];

function MessageScreen(props) {
  const [messages, setMessages] = useState(initalMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // delete the message from messages
    // call the server to delete this message
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            ...messages,
            {
              id: 4,
              title: "T4",
              description: "D4",
              image: require("../assets/mosh.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessageScreen;
