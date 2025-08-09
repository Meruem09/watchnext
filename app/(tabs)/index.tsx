import { Link, Tabs } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-5xl text-accent font-bold">Hello! </Text>
    </View>
  );
}
