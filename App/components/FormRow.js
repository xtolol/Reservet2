import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import colors from "../constants/colors";

const styles = StyleSheet.create({
  formText: {
    color: colors.red,
    fontFamily: "asap-b",
    fontSize: 14,
  },
  rowContent: {
    rowGap: 15,
  },
  borderWhite: {
    borderBottomColor: colors.white,
    borderBottomWidth: 3,
    marginBottom: 20,
  },
  inputForm: {
    fontSize: 16,
  },
});

export const FormRow = ({ text, placeholderText, isPassword }) => {
  return (
    <View style={styles.rowContent}>
      <Text style={styles.formText}>{text}</Text>
      <TextInput
        style={styles.inputForm}
        placeholder={placeholderText}
        secureTextEntry={isPassword}
        placeholderTextColor={colors.grey}></TextInput>
      <View style={styles.borderWhite}></View>
    </View>
  );
};
