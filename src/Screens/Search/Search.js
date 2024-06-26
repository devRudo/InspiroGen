import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchInput from "@/Components/SearchInput";
import { useTheme } from "react-native-paper";
import SearchMaterialTopNavigator from "@/Navigations/SearchMaterialTopNavigator";

const Search = ({ navigation }) => {
  const theme = useTheme();

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.background }}
    >
      <SearchInput />
      <SearchMaterialTopNavigator />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // minHeight: 200,
    // justifyContent: "center",
  },
});
