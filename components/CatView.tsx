import { Text, View } from "./Themed";
import { Image, StyleSheet, useWindowDimensions } from "react-native";

interface Props {
  name: string;
  description: string;
  image: string;
}

export default function CatView({ name, description, image }: Props) {
  const { fontScale } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image }}
        style={styles.image}
        onError={(error) => console.error("Image loading error:", error)}
      />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      {/* <Text style={[styles.description, { fontSize: fontScale * 12 }]}>
        {description}
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    minHeight: 450,
    paddingBottom: 20,
    borderRadius: 20,
    backgroundColor: "coral",
    marginBottom: 20,
    boxShadow: "0 0 10 black",
  },
  image: {
    width: "100%",
    height: 300,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    objectFit: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    paddingHorizontal: 10,
    color: "#fff",
  },
  description: {
    paddingHorizontal: 10,
    color: "#fff",
  },
});
