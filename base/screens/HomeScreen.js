import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

// in order to use the navigation feature we have
// to consider navigation props as a input argurment
const HomeScreen = () => {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.replace("SecondScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <Pressable onPress={onPressHandler}>
        <Text style={styles.button}>Go to SecondScreen</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    color: "blue",
  },
  button: {
    marginTop: 20,
    padding: 5,
    color: "red",
    backgroundColor: "cyan",
  },
});
