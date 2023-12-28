import { SafeAreaView, ScrollView } from "react-native";
import { View } from "../../components/Themed";
import { cats } from "../../constants/cat";
import CatView from "../../components/CatView";

export default function CatScreen() {
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <View>
            {cats.map((cat, index) => (
              <CatView
                key={index}
                name={cat.name}
                description={cat.description}
                image={cat.image}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
