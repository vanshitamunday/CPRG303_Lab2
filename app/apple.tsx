import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ApplePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is an Apple!</Text>
        {
      <Image
        source={require("../assets/apple.jpg")}
        style={styles.image}
      />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
