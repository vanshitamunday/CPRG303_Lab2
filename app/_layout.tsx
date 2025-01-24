import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#007BFF" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      {/* Define all screens in this stack */}
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="apple" options={{ title: "Apple" }} />
      <Stack.Screen name="orange" options={{ title: "Orange" }} />
      <Stack.Screen name="mango" options={{ title: "Mango" }} />
    </Stack>
  );
}
