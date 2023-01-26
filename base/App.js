import { Button, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

// HOOK => mutableStateOf()
// IMPORT useState
import { useState } from "react";
export default function App() {
  const [name, setName] = useState("Mash");
  const [session, setSession] = useState({ number: 6, title: "state" });
  const [current, setCurrent] = useState(true);

  const onClickHandler = () => {
    setName("Programming with me");
    setSession({ number: 7, title: "Style" });
    setCurrent(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Button title="Change" onPress={onClickHandler}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#854D27",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
    fontStyle: "italic",
    margin: 40,
  },
  btn: {
    margin: 50,
  },
});
