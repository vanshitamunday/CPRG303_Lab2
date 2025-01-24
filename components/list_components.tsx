import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const items = ["apple", "orange", "mango"];

export default function ListComponent() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.item}
          onPress={() => router.push(item)}
        >
          <Text style={styles.itemText}>{`${item[0].toUpperCase()}${item.slice(1)}`}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  item: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },
  itemText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
