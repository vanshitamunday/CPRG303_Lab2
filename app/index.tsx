import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import {Link} from "expo-router";
import ListComponent from "../components/list_components";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App!</Text>
      <Text style={styles.subtitle}>Click on a fruit to learn more:</Text>
      <ListComponent />

      {/* Button to navigate to Lab 3 */}
      <Pressable style={styles.button}>
        <Link href="/lab_3">
          <Text style={styles.buttonText}>Go to Lab 3 Counter</Text>
        </Link>
      </Pressable>

      {/* Button to navigate to Lab 4 */}
      <Pressable style={styles.button}>
        <Link href="/lab4">
          <Text style={styles.buttonText}>Go to Lab 4 Destinations</Text>
        </Link>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "#666",
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10, // Added margin between buttons
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});