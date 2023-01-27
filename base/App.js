import {
  Image,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  const changeText = (text) => {
    setName(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please write your name:</Text>
      <TextInput
        secureTextEntry
        maxLength={5}
        style={styles.input}
        placeholder="e.g John"
        onChangeText={changeText}
      />
      <Text style={styles.text}>Your name is: {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    padding: 20,
  },
  text: {
    color: "#000000",
    fontSize: 20,
    margin: 10,
  },
  input: {
    textAlign: "center",
    fontSize: 20,
    width: 200,
    borderWidth: 1,
    borderColor: "#555",
  },
});
