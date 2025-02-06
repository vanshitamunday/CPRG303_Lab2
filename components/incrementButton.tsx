import { Pressable, Text, StyleSheet } from "react-native";

interface Props {
  increment: () => void;
}

export default function IncrementButton({ increment }: Props) {
  return (
    <Pressable style={styles.button} onPress={increment}>
      <Text style={styles.text}>Increment</Text>
    </Pressable>
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
