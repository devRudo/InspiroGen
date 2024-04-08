import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";

const SearchTab = ({ navigation, route, tabName }) => {
  const theme = useTheme();

  // console.log(navigation);
  console.log(route.name);

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.background }}
    >
      <Text>{route.name || ""}</Text>
    </View>
  );
};

export default SearchTab;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
