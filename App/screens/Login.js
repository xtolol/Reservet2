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
import { Logo } from "../components/Logo";
import colors from "../constants/colors";
SplashScreen.preventAutoHideAsync();

const logoImage = require("../assets/TextLogo.png");
const eyeImage = require("../assets/eyelogo.png");

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
      <Logo />
      <View style={styles.containerHeader1}>
        <View style={styles.textHeader1}>
          <Text
            style={{
              fontSize: 30,
              color: colors.white,
              fontFamily: "quick-b",
              fontWeight: "bold",
            }}>
            Sign In
          </Text>
          <Text
            style={{ fontFamily: "asap-lg", color: colors.grey, fontSize: 16 }}>
            Hi There! Nice to see you again.
          </Text>

          <View style={styles.formLogin}>
            <Text
              style={{
                color: colors.red,
                fontFamily: "asap-b",
                fontSize: 14,
              }}>
              Email
            </Text>
            <TextInput
              style={{ fontSize: 16 }}
              placeholderTextColor={colors.white}></TextInput>
            <View
              style={{
                borderBottomColor: colors.white,
                borderBottomWidth: 3,
                marginBottom: 20,
              }}></View>
            <Text style={{ color: colors.red, fontFamily: "asap-b" }}>
              Password
            </Text>
            <View style={styles.eyeView}>
              <TextInput
                style={{ fontSize: 16, flex: 0.9 }}
                secureTextEntry={true}
                placeholderTextColor={colors.white}></TextInput>
              <Image
                style={{ width: 25, height: 25, flex: 0.1 }}
                source={eyeImage}></Image>
            </View>
            <View
              style={{
                borderBottomColor: colors.white,
                borderBottomWidth: 3,
              }}></View>

            <TouchableOpacity
              title="Sign In"
              style={{
                marginTop: 10,
                paddingTop: 20,
                paddingBottom: 20,
                backgroundColor: colors.red,
                borderRadius: 10,
              }}>
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
                Sign In
              </Text>
            </TouchableOpacity>
            <View style={styles.labeltext1}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: "asap-b",
                    color: colors.grey,
                    fontSize: 16,
                  }}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.push("Welcome")}>
                <Text
                  style={{
                    fontFamily: "asap-b",
                    color: colors.red,
                    fontSize: 16,
                  }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282424",
    padding: 10,
  },
  heroContainer: {
    alignItems: "center",
    marginTop: 100,
  },
  heroImage: {
    width: 250,
    height: 50,
  },
  containerHeader1: {
    flex: 1,
    flexDirection: "column",
    padding: 30,
    paddingTop: 80,
  },
  textHeader1: {
    flex: 1,
    rowGap: 20,
    width: "auto",
  },
  formLogin: {
    flex: 1,
    rowGap: 15,
    marginTop: 15,
  },
  labeltext1: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  eyeView: {
    flexDirection: "row",
  },
});
