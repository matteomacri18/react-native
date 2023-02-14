import { Button, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

interface Data {
  artist: string;
  artist_url: string;
  error: string;
  source_url: string;
  url: string;
}

export default function App() {

  const [count, setCount] = React.useState(0);
  const [bool, setBool] = React.useState(false);

  const [data, setData] = React.useState<Data>();

  const API = () => {
    fetch('https://api.catboys.com/img', { method: 'GET' })
      .then((response) => response.json())
      .then((res) => {
        setData(res);
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <Text>API TEST</Text>
      <Text>{data?.artist}</Text>
      <Text>{data?.artist_url}</Text>
      <Pressable style={styles.button} onPress={() => API()}><Text>fetch</Text></Pressable>
      <StatusBar style="auto" />
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
