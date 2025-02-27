import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function MangoPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is a Mango!</Text>
      <Image
        source={require("../assets/mango.jpg")}
        style={styles.image}
      />
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
  image: {
    width: 200,
    height: 200,
  },
});
