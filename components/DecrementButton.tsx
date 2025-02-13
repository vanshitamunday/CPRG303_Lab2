import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function DecrementButton({ decrement }: { decrement: () => void }) {
  return (
    <TouchableOpacity style={styles.button} onPress={decrement}>
      <Text style={styles.text}>Decrement</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});