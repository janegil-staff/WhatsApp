import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigator from "./MainNavigator";
import ChatSettingsScreen from "../screens/ChatSettingsScreen";
import AuthScreen from "../screens/AuthScreen";

const AppNavigator = (props) => {
  const isAuth = false;

  return (
    <NavigationContainer>
      {isAuth && <MainNavigator />}
      {!isAuth && <AuthScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
