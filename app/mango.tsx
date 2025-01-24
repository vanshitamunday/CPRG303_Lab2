import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MangoPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is a Mango!</Text>
      {/* 
      <Image
        source={require("../assets/mango.png")}
        style={styles.image}
      />
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
