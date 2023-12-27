import { Text, View } from "./Themed";
import { Image, StyleSheet } from "react-native";

interface Props {
  index: number;
  name: string;
  description: string;
  image: string;
}

export default function CatView({ index, name, description, image }: Props) {
  return (
    <View key={index} style={styles.container}>
      <Image
        source={{ uri: image }}
        style={{
          width: "100%",
          height: 300,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          objectFit: "cover",
        }}
        onError={(error) => console.error("Image loading error:", error)}
      />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
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
