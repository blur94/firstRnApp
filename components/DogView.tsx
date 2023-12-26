import React from "react";
import { Text, View } from "./Themed";
import { dogs } from "../constants/dog";
import { Image, StyleSheet } from "react-native";

export default function DogView() {
  return (
    <View>
      {dogs.map((dog, index) => (
        <View key={index} style={styles.container}>
          <Image
            source={{ uri: dog.image }}
            style={{
              width: "100%",
              height: 300,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              objectFit: "cover",
            }}
            onError={(error) => console.error("Image loading error:", error)}
          />
          <Text style={styles.title}>{dog.name}</Text>
          <Text style={styles.description}>{dog.description}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    height: 400,
    borderRadius: 20,
    backgroundColor: "#dedede",
    marginBottom: 20,
    boxShadow: "0 0 10 black",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  description: {
    paddingHorizontal: 10,
  },
});
