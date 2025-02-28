import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import CallAPI from "../components/callAPI"; 

export default function Lab5() {  
  const [showData, setShowData] = useState(false); 

  const renderCallAPI = () => {
    if (showData) {
      return <CallAPI />;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lab 5: API Call Example</Text>

      <Button
        title={showData ? "Hide Data" : "Fetch Data"}
        onPress={() => setShowData(!showData)}
      />

      {renderCallAPI()}
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
