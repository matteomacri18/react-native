import React from "react";
import { Button, StyleSheet } from "react-native";

// name component, props take referiments to methods of the elements where component is used
const MashButton = (props) => {
  return (
    <Button
      title={props.submitted ? "Clear" : "Submit"}
      onPress={props.onPressHandler} // props transfer values to the component
    />
  );
};

const styles = StyleSheet.create({
  button: {
    width: 400,
  },
});

export default MashButton;
