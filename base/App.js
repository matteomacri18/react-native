// IMPORT Flatlist = RecyclerView
import {
  Flatlist,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";

// HOOK => mutableStateOf()
// IMPORT useState
import { useState } from "react";
export default function App() {
  // Array of objs with state
  const [Items, setItems] = useState([
    { key: 1, item: "Item 1" },
    { key: 2, item: "Item 2" },
    { key: 3, item: "Item 3" },
  ]);

  // Array of objs no state
  const animals = [
    { id: 1, name: "Shark" },
    { id: 2, name: "Lampo" },
    { id: 3, name: "Dog" },
    { id: 4, name: "Lmao" },
    { id: 5, name: "Shark" },
    { id: 6, name: "Lampo" },
    { id: 7, name: "Dog" },
    { id: 8, name: "Lmao" },
    { id: 9, name: "Shark" },
    { id: 10, name: "Lampo" },
    { id: 11, name: "Dog" },
    { id: 12, name: "Lmao" },
  ];

  const nothing = () => {};

  // lambda, input animal output Text animal's name
  const animal = ({ item }) => (
    <Text style={styles.text} onPress={nothing}>
      {item.name}
    </Text>
  );

  return (
    <View style={styles.container}>
      <FlatList horizontal data={animals} renderItem={animal}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#854D27",
  },
  item: {
    backgroundColor: "#4ae1fa",
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
