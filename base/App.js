import { Image, Button, FlatList, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

function number() {
  return Math.floor(Math.random() * 6) + 1;
}

export default function App() {
  const [face, setFace] = useState("");
  const [img, setImage] = useState(require("./assets/1.png"));

  const rollDice = () => {
    let n = number();
    setFace(n);
    console.log(n);
    switch (n) {
      case 1:
        setImage(require("./assets/1.png"));
        break;
      case 2:
        setImage(require("./assets/2.png"));
        break;
      case 3:
        setImage(require("./assets/3.png"));
        break;
      case 4:
        setImage(require("./assets/4.png"));
        break;
      case 5:
        setImage(require("./assets/5.png"));
        break;
      case 6:
        setImage(require("./assets/6.png"));
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{face}</Text>
      <Image style={styles.img} source={img} />
      <Button style={styles.button} title="Roll" onPress={rollDice} />
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
