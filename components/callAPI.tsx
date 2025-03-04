import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

export default function CallAPI() {
  const [data, setData] = useState<{ title: string; body: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    fetchData(); 
  }, []);

  // Show loading indicator while fetching data
  if (loading) return <ActivityIndicator size="large" color="blue" />;
  
  // Show error message if fetching fails
  if (error) return <Text style={styles.errorText}>{error}</Text>;

  // Show data if fetched successfully
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Data from API:</Text>
      {data && (
        <>
          <Text style={styles.dataText}>Title: {data.title}</Text>
          <Text style={styles.dataText}>Body: {data.body}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  dataText: {
    fontSize: 16,
    textAlign: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
});
