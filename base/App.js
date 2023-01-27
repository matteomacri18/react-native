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

export default function App() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const changeText = (text) => {
    setName(text);
  };

  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      Alert.alert(
        "Warning", // title
        "Name must be longer than 3 chars", // mex
        [ // max three buttons 
          {
            text: "Ok",
            onPress: () => console.warn("Ok Pressed!"),
            style: "destructive",
          },
          {
            text: "Cancel",
            onPress: () => console.warn("Cancel Pressed!"),
            style: "destructive",
          },
          {
            text: "Do not show again",
            onPress: () => console.warn("DNSA Pressed!"),
            style: "destructive",
          },
        ],
        { cancelable: true } // option for the dialog
      ); 
    }
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
      <Button title={submitted ? "Clear" : "Submit"} onPress={onPressHandler} />
      {/* <TouchableOpacity>
        inside we have elements we want to make clickable like button
      </TouchableOpacity> */}
      {submitted ? <Text style={styles.text}>Your name is: {name}</Text> : null}
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
