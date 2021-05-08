import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Icon from "../components/Icon";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItemSeparatorComponent from "../components/ListItemSeparator"

const menuItems = [
    {title:"My Listing",
    icon:{
        name:"format-list-bulleted",
        backgroundColor:colors.primary
    }
},
{title:"My Messages",
icon:{
    name:"email",
    backgroundColor:colors.secondary
}
},
];


function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Mohsen"
          subTitle="mohsen.abedelaal@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View styles={styles.container}>
          <FlatList 
          data={menuItems}
          keyExtractor={item => item.title}
          ItemSeparatorComponent={ListItemSeparatorComponent}
          renderItem={({item})=>
          <ListItem title={item.title}
          ImageComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>} />}

          />
      </View>
      <View style={styles.logout}>
      <ListItem 
      title="Log Out"
      ImageComponent={
          <Icon name="logout" backgroundColor="#ffe66d"/>
      }
      />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical:30
  },
  screen:{
      backgroundColor:colors.light
  },
  logout:{
      marginVertical:20
  }
});
export default AccountScreen;
