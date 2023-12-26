import React from "react";
import { Text, View } from "../../components/Themed";
import DogView from "../../components/DogView";
import { SafeAreaView, ScrollView } from "react-native";

export default function DogScreen() {
  return (
    <View>
      {/* <Text>Dog Screen</Text> */}
      <SafeAreaView>
        <ScrollView>
          <DogView />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
