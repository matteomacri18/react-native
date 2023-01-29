import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

// props = argomenti che passo alla funzione
// es. passo navigation così non lo ricreo anche i questa schermata
const SecondScreen = ({navigation}) => {

  const onPressHandler = () => {
    navigation.replace("HomeScreen");
    // navigation.replace("HomeScreen") --> non si mette nello stack
    // navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>SecondScreen</Text>
      <Pressable onPress={onPressHandler}>
        <Text style={styles.button}>Go to HomeScreen</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    color: "red",
  },
  button: {
    marginTop: 20,
    padding: 5,
    color: "red",
    backgroundColor: "cyan",
  },
});
