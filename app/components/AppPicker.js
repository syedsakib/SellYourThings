import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./Screen";
import AppText from "./AppText";
import defaultStyles from "../config/styles";

import PickerItem from "./PickerItem";

const AppPicker = ({
  icon,
  placeholder,
  items,
  selectedItem,
  onSelectItem,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Clode Modal" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => {
              return (
                <PickerItem
                  label={item.label}
                  onPress={() => {
                    onSelectItem(item);
                    setModalVisible(false);
                  }}
                />
              );
            }}
          />
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    width: "100%",
    borderRadius: 25,
    padding: 15,
    flexDirection: "row",
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    marginTop: 3,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
