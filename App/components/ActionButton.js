import React from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
} from "react-native";

import colors from "../constants/colors";

export const ActionButton = ({ nav, text }) => {
  return (
    <TouchableOpacity
      title="Sign In"
      style={{
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: colors.red,
        borderRadius: 10,
      }}
      onPress={nav}>
      <Text
        style={{
          color: "#fff",
          textAlign: "center",
          paddingLeft: 10,
          paddingRight: 10,
          fontSize: 20,
          fontFamily: "asap-b",
          shadowColor: "white",
          shadowOpacity: 1,
          shadowRadius: 30,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
