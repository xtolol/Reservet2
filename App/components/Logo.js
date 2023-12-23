import React from "react";

import { View, Image, StyleSheet } from "react-native";

const logoImage = require("../assets/TextLogo.png");

const styles = StyleSheet.create({
  heroContainer: {
    alignItems: "center",
    marginTop: 115,
  },
  heroImage: {
    width: 250,
    height: 50,
  },
});

export const Logo = () => {
  return (
    <View style={styles.heroContainer}>
      <Image source={logoImage} style={styles.heroImage}></Image>
    </View>
  );
};
