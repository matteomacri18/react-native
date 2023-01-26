import { Image, Button, FlatList, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

function number() {
  return Math.floor(Math.random() * 6) + 1;
}

export default function App() {
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000000",
    fontSize: 25,
    margin: 50,
  },
  img: {
    width: "50%",
    height: "25%",
    marginBottom: 40,
  },
});
