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
  return (
    <View style={styles.container}>
      <BackButton nav={() => navigation.goBack()} />
      <View style={styles.allContent}>
        <View style={styles.headContainer}>
          <Text
            style={{
              fontSize: 26,
              color: colors.white,
              fontFamily: "quick-b",
              textAlign: "center",
            }}>
            What type of business are you running?
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Continue
            text1={"Barbershop"}
            logo={require("../assets/greyarrow.png")}
          />
          <Continue
            text1={"Hair Salon"}
            logo={require("../assets/greyarrow.png")}
          />
          <Continue
            text1={"Beauty Salon"}
            logo={require("../assets/greyarrow.png")}
          />
          <Continue
            text1={"Massage"}
            logo={require("../assets/greyarrow.png")}
          />
        </View>
        <View style={styles.actionContainer}>
          <ActionButton
            text={"Continue"}
            nav={() => navigation.push("TypeWhere")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282424",
  },
  headContainer: {
    justifyContent: "center",
    marginTop: 10,
    padding: 50,
  },
  buttonContainer: {
    alignItems: "center",
    rowGap: 20,
  },
  actionContainer: {
    justifyContent: "center",
    marginTop: 20,
    padding: 50,
  },
});
