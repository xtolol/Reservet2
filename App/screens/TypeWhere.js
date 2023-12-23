import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import colors from "../constants/colors";
import { BackButton } from "../components/BackButton";
import { Continue } from "../components/Continue";
import { ActionButton } from "../components/ActionButton";
SplashScreen.preventAutoHideAsync();

export default ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "quick-lg": require("../assets/fonts/quicksand/Quicksand-VariableFont_wght.ttf"),
    "quick-b": require("../assets/fonts/quicksand/Quicksand-Bold.ttf"),
    "asap-lg": require("../assets/fonts/asap/Asap-Variable.ttf"),
    "asap-b": require("../assets/fonts/asap/Asap-Bold.ttf"),
  });

  useEffect(() => {
    async function loadFontsAndHideSplash() {
      await SplashScreen.preventAutoHideAsync();
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    loadFontsAndHideSplash();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return <View></View>;
};
