import { Link } from "expo-router";
import { Text, View } from "react-native";
import onboarding from "./onboarding";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-5xl text-accent font-bold">Hello! </Text>
      <Link href="/onboarding">Onboarding</Link>
    </View>
  );
}
