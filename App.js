import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
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
        Generate Random Inpiration and Life Quotes Everyday to keep motivated.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
