import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import vacationDestinations from "../constants/list_items";

export default function Lab4() {
  const [selectedDestinations, setSelectedDestinations] = useState<number[]>([]);

  const handleSelect = (id: number) => {
    setSelectedDestinations([...selectedDestinations, id]);
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose the destinations you would like a quote for</Text>
      
      <FlatList
        data={vacationDestinations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={() => handleSelect(item.id)} style={styles.item}>
            <Text style={styles.text}>
                {selectedDestinations.includes(item.id) ? <Text>{"\u2705"}</Text> : ""} {item.location} - ${item.price} - {item.average_yearly_temperature}
            </Text>
        </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  item: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 2,
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
});

