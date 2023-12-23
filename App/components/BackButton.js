import React from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
} from "react-native";

const styles = StyleSheet.create({
  stacklogo: {
    alignItems: "flex-start",
    marginLeft: 20,
    zIndex: 10,
  },
});

export const BackButton = ({ nav }) => {
  return (
    <SafeAreaView style={styles.stacklogo}>
      <TouchableOpacity onPress={nav}>
        <Image
          source={require("../assets/back.png")}
          style={{
            width: 35,
            height: 35,
          }}></Image>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
