import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();

const settingsOptions = [
  { key: "1", title: "SETTING 1", description: "Description 1" },
  { key: "2", title: "SETTING 2", description: "Description 2" },
  // Add more settings options here
];

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="ios-arrow-back" size={24} color="black" />
        <Text style={styles.headerTitle}>Settings</Text>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search settings"
        placeholderTextColor="#666"
      />
      <FlatList
        data={settingsOptions}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.settingItem}>
            <Ionicons name="ios-settings" size={24} color="black" />
            <View style={styles.settingTexts}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282424",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#282424",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  searchInput: {
    height: 40,
    backgroundColor: "#333",
    margin: 10,
    borderRadius: 10,
    padding: 10,
    color: "#fff",
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#222",
  },
  settingTexts: {
    marginLeft: 10,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    color: "#888",
    fontSize: 14,
  },
});
