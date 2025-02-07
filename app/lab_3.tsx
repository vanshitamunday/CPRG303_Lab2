import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import IncrementButton from "../components/incrementButton";
import DecrementButton from "../components/decrementButton";

export default function Lab3() {
  const [counter, setCounter] = useState(0); // Counter state

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quantity: {counter}</Text>
      <View style={styles.buttonContainer}>        
        <DecrementButton decrement={() => setCounter(counter - 1)}/> 
        <IncrementButton increment={() => setCounter(counter + 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000", 
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row", 
    marginTop: 10,
  },
  link: {
    marginTop: 20,
    fontSize: 18,
    color: "blue",
  },
});
