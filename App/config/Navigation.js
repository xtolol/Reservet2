import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Welcome from "../screens/Welcome";
import BusinessSignUp from "../screens/BusinessSignUp";
import TypeBusiness from "../screens/TypeBusiness";
import TypeWhere from "../screens/TypeWhere";
import SettingsScreen from "../screens/SettingsScreen";

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator headerMode="none" initialRouteName="Login">
    <MainStack.Screen name="Login" component={Login} />
    <MainStack.Screen name="Welcome" component={Welcome} />
    <MainStack.Screen name="BusinessSignUp" component={BusinessSignUp} />
    <MainStack.Screen name="TypeBusiness" component={TypeBusiness} />
    <MainStack.Screen name="TypeWhere" component={TypeWhere} />
    <MainStack.Screen name="SettingsScreen" component={SettingsScreen} />
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);
