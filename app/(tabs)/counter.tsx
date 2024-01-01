import React, { useState } from "react";
import { Text, View } from "../../components/Themed";
import {
  Pressable,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

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
      backgroundColor: "#333333",
      alignSelf: "center",
      marginTop: 20,
      borderRadius: 20,
      padding: 15,
    },
    btnContainer: {
      display: "flex",
      width: width / 1.5,
      flexDirection: "row",
      justifyContent: "center",
      gap: 30,
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
              color="#fff"
              style={{ opacity: pressed ? 0.5 : 1 }}
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
              color="#fff"
              style={{ opacity: pressed ? 0.5 : 1 }}
            />
          )}
        </Pressable>
      </View>
    </View>
  );
}
