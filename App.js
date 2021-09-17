import React from "react";
import { View } from "react-native";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <Screen>
      <Icon name="email" size={50} backgroundColor="red" iconColor="white" />
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
