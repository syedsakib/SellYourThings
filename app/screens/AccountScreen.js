import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const AccountScreen = () => {
  const menuItems = [
    {
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary,
      },
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: colors.secondary,
      },
      targetScreen: "Messages",
    },
  ];

  return (
    <Screen style={styles.screen}>
      <View>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          subTitle="mosh@gmail.com"
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title.toString()}
          renderItem={({ item }) => (
            <ListItem
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              title={item.title}
            />
          )}
          ItemSeparatorComponent={() => <ListItemSeparator />}
        />
      </View>
      <View>
        <ListItem
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
          title="Log Out"
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
