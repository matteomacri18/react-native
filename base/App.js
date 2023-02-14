import { Button, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

interface Data {
  artist: string;
  artist_url: string;
  error: string;
  source_url: string;
  url: string;
}

interface Dog {
  message: string;
}

export default function App() {
  const [data, setData] = React.useState<Dog>();

  const API = () => {
    fetch('https://dog.ceo/api/breeds/image/random', { method: 'GET' })
      .then((response) => response.json())
      .then((res) => {
        setData(res);
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <Image
          style={styles.imgFixed}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
      <Text>API TEST</Text>
      {/* <Text style={styles.title}>{data?.message}</Text>
      <Text style={styles.subtitle}>{data?.artist_url}</Text>
      <Text>{data?.url}</Text> */}
      <Image
          style={styles.imgDog}
          source={{
            uri: data?.message,
          }}
        />
      <TouchableHighlight underlayColor={'#DDD'} style={styles.button} onPress={() => API()}>
        <Text>Fetch</Text>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </SafeAreaView>
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
