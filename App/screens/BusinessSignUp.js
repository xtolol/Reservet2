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
import { BackButton } from "../components/BackButton";
import { FormRow } from "../components/FormRow";
import { ActionButton } from "../components/ActionButton";
import BouncyCheckbox from "react-native-bouncy-checkbox";
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
      <BackButton nav={() => navigation.goBack()} />
      <View style={styles.allContent}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            rowGap: 10,
          }}>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "quick-b",
              color: colors.white,
            }}>
            Sign Up
          </Text>
          <Text
            style={{ color: colors.grey, fontSize: 10, fontFamily: "quick-b" }}>
            Business
          </Text>
        </View>
        <View style={styles.formContainer}>
          <FormRow text={"Name"} placeholderText={"Your Company's Name"} />
          <FormRow text={"Email"} placeholderText={"Your Company's Email"} />
          <View style={{ rowGap: 15 }}>
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
          </View>
        </View>
        <View style={styles.lowerContainer}>
          <BouncyCheckbox
            size={25}
            fillColor={colors.red}
            unfillColor={colors.backgroundColor}
            text="I agree to the Terms of Services and Privacy Policy."
            iconStyle={{ borderColor: "red", borderRadius: 7 }}
            innerIconStyle={{ borderWidth: 2, borderRadius: 7 }}
            textStyle={{
              fontFamily: "asap-lg",
              textDecorationLine: "none",
              color: colors.red,
              lineHeight: 25,
            }}
            textContainerStyle={{
              width: 300,
            }}
          />
          <ActionButton
            text={"Continue"}
            nav={() => navigation.push("TypeBusiness")}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}>
            <Text
              style={{
                fontFamily: "asap-b",
                color: colors.grey,
                fontSize: 16,
              }}>
              Have an Account?
            </Text>
            <TouchableOpacity style={{}}>
              <Text
                style={{
                  fontFamily: "asap-b",
                  color: colors.red,
                  fontSize: 16,
                }}>
                Sign In
              </Text>
            </TouchableOpacity>
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

  allContent: {
    flex: 1,
    padding: 30,
  },

  formContainer: {
    marginTop: 35,
    rowGap: 20,
  },
  eyeView: {
    flexDirection: "row",
  },

  lowerContainer: {
    marginTop: 60,
    rowGap: 30,
  },
});
