import { StyleSheet, View, ActivityIndicator } from "react-native";
import React from "react";
import { useTheme, Text } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

const Quote = ({ quote, author }) => {
  const theme = useTheme();

  console.log(theme.colors.primary);
  return (
    <View style={{ ...styles.mainContainer }}>
      <View
        style={{
          ...styles.quoteContainer,
          backgroundColor: theme.colors.primary,
        }}
      >
        <FontAwesome
          name="quote-left"
          color={theme.colors.secondary}
          size={40}
        />
        <Text variant="titleLarge" style={{ color: "#fff" }}>
          {quote}
        </Text>
      </View>
      <View style={{ ...styles.authorContainer }}>
        <Text variant="titleMedium" style={{ color: theme.colors.backdrop }}>
          {author}
        </Text>
      </View>
    </View>
  );
};

export default Quote;

const styles = StyleSheet.create({
  mainContainer: {
    gap: 10,
  },
  quoteContainer: {
    paddingVertical: 40,
    paddingHorizontal: 25,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 8,
    gap: 20,
  },
  authorContainer: {
    alignItems: "flex-end",
  },
});
