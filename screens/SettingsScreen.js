import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
const image = { uri: "https://legacy.reactjs.org/logo-og.png" };
import backgroundImage from "../assets/images/droplet.jpeg";
const SettingsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Settings screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SettingsScreen;
