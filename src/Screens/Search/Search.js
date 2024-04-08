import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const Search = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Inspiro Gen</Text>
      <Text
        style={{
          textAlign: "center",
          marginTop: 10,
          padding: 16,
        }}
      >
        Search for the Quotes
      </Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
