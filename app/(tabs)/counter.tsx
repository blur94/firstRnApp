import React, { useState } from "react";
import { Text, View } from "../../components/Themed";
import {
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";

export default function CounterScreen() {
  const [counter, setCounter] = useState(0);
  const { width, height } = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 40,
    },
    btn: {
      backgroundColor: "blue",
      width: width / 1.5,
      alignSelf: "center",
      marginTop: 20,
      borderRadius: 20,
      padding: 15,
    },
  });

  return (
    <View style={[{ flex: 1 }, styles.container]}>
      <Text style={styles.text}>{counter}</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => setCounter((prev) => prev + 1)}
      >
        <Text style={{ textAlign: "center" }}>Increment</Text>
      </TouchableOpacity>
    </View>
  );
}
