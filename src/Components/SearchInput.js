import { StyleSheet, View, ActivityIndicator } from "react-native";
import React from "react";
import { useTheme, Text, Button, Searchbar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const SearchInput = ({}) => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <View
      style={{
        ...styles.mainContainer,
        backgroundColor: theme.colors.background,
      }}
    >
      <Searchbar
        mode="bar"
        placeholder="Search for inspiration"
        onChangeText={setSearchQuery}
        value={searchQuery}
        onIconPress={() => {}}
        placeholderTextColor={"#aaa"}
        right={() => {
          return (
            <Button mode="text" onPress={() => console.log("Pressed")}>
              Search
            </Button>
          );
        }}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
  },
});
