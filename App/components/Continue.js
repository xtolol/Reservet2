import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  continue: {
    borderWidth: 3,
    width: 300,
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
    borderColor: colors.red,
    elevation: 15,
    shadowColor: colors.grey,
  },
  label: {
    flexDirection: "row",
    flex: 0.9,
  },

  logoStyle: {
    width: 25,
    height: 25,
    flex: 0.1,
  },
});

export const Continue = ({ text1, text2, logo, nav }) => {
  return (
    <TouchableOpacity style={styles.continue} onPress={nav}>
      <View style={styles.label}>
        <Text
          style={{
            fontFamily: "quick-b",
            fontSize: 18,
            color: colors.grey,
          }}>
          {text1}
        </Text>
        <Text
          style={{
            fontFamily: "quick-b",
            fontSize: 18,
            color: colors.red,
          }}>
          {text2}
        </Text>
      </View>
      <Image style={styles.logoStyle} source={logo}></Image>
    </TouchableOpacity>
  );
};
