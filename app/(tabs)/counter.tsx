import React, { useState } from "react";
import { Text, View } from "../../components/Themed";
import {
  Pressable,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useColorScheme } from "react-native";

export default function CounterScreen() {
  const [counter, setCounter] = useState(0);
  const { width, height } = useWindowDimensions();
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 40,
    },
    btn: {
      backgroundColor: colorScheme === "dark" ? "#333333" : "#dedede",
      alignContent: "center",
      marginTop: 20,
      borderRadius: 10,
      padding: 15,
      //   width: width / 3.5,
      flexGrow: 1,
    },
    btnContainer: {
      display: "flex",
      width: width / 1.5,
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 20,
    },
    reset: {
      backgroundColor: colorScheme === "dark" ? "#333333" : "#dedede",
      marginTop: 20,
      padding: 15,
      width: width / 1.5,
      textAlign: "center",
      borderRadius: 10,
    },
    btnText: {
      color: colorScheme === "light" ? "#000" : "#fff",
      textAlign: "center",
    },
  });

  return (
    <View style={[{ flex: 1 }, styles.container]}>
      <Text style={styles.text}>{counter}</Text>

      <View style={styles.btnContainer}>
        <Pressable
          style={styles.btn}
          onPress={() => setCounter((prev) => prev + 1)}
        >
          {({ pressed }) => (
            <FontAwesome
              name="plus"
              size={25}
              style={[{ opacity: pressed ? 0.5 : 1 }, styles.btnText]}
            />
          )}
        </Pressable>

        <Pressable
          style={styles.btn}
          onPress={() => {
            if (counter <= 0) return;
            setCounter((prev) => prev - 1);
          }}
        >
          {({ pressed }) => (
            <FontAwesome
              name="minus"
              size={25}
              style={[{ opacity: pressed ? 0.5 : 1 }, styles.btnText]}
            />
          )}
        </Pressable>
      </View>

      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.reset}
        onPress={() => setCounter(0)}
      >
        <Text style={[styles.btnText, { fontSize: 20 }]}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}
