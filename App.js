import React from "react";
import { View } from "react-native";
import AppButton from "./app/components/AppButton";
import AppTextinput from "./app/components/AppTextinput";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <Screen>
      <AppTextinput placeholder="Username" icon="email" />
    </Screen>
  );
}

{
  /* <View
style={{
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}}
>
<AppButton title="login" onPress={() => console.log("button pressed")} />
</View> */
}
