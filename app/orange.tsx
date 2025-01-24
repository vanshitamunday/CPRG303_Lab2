import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function OrangePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is an Orange!</Text>
      {/* 
      <Image
        source={require("../assets/orange.png")}
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
