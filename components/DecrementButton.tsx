import { Pressable, Text, StyleSheet } from "react-native";

interface Props {
    decrement: () => void;
}

export default function DecrementButton({ decrement }:Props) {
return(
    <Pressable style={styles.button} onPress={decrement}>
          <Text style={styles.text}>Decrement</Text>
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