import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import colors from "../constants/colors";
import { Logo } from "../components/Logo";
import { Continue } from "../components/Continue";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackButton } from "../components/BackButton";

SplashScreen.preventAutoHideAsync();

const logoImage = require("../assets/TextLogo.png");
const eyeImage = require("../assets/eyelogo.png");
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

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

      <View style={{ marginTop: -50 }}>
        <Logo />

        <View>
          <View style={styles.textContainer}>
            <Text style={styles.hello}>Merhaba.</Text>
            <Text style={styles.body1}>
              Merhaba ve Rezervet'e hoş geldiniz, düzenli rezervasyon yönetimi
              için başvurduğunuz çözüm. Rezervasyonları gözlemleyen bir yönetici
              veya programınızı yöneten bir çalışan olun, size yardımcı olmak
              için buradayız.
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <Continue
              text1="Continue as"
              text2=" Business"
              logo={require("../assets/greyarrow.png")}
              nav={() => navigation.push("BusinessSignUp")}
            />
            <Continue
              text1="Continue as"
              text2=" Employee"
              logo={require("../assets/greyarrow.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#282424",
    flex: 1,
  },

  hello: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 40,
    fontFamily: "quick-b",
    color: colors.red,
  },

  body1: {
    textAlign: "center",
    color: colors.grey,
    fontFamily: "quick-lg",
    fontSize: 18,
    padding: 20,
  },

  textContainer: {},

  buttonContainer: {
    paddingTop: 50,
    alignItems: "center",
    flexDirection: "column",
    rowGap: 30,
    height: 300,
  },
});
