import {
  Image,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import MashButton from "./CustomComponent";

export default function App() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    padding: 20,
  },
});
