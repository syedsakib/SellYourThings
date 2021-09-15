import React from "react";
import { View } from "react-native";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#F8F4F4",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card
        title="Red Jacket for Sale"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
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
