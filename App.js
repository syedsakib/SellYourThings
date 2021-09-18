import React, { useState } from "react";
import { View } from "react-native";
import AppButton from "./app/components/AppButton";
import AppPicker from "./app/components/AppPicker";
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

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Cameras",
    value: 3,
  },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <Screen>
      <AppPicker
        icon="apps"
        placeholder="Category"
        items={categories}
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
      />
      <AppTextinput icon="email" placeholder="Email" />
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
