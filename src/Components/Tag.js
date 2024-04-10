import { StyleSheet, View, ActivityIndicator, Image } from "react-native";
import React, { useCallback, useState } from "react";
import { useTheme, Text, Avatar, Chip } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import ActionButtons from "./ActionButtons";

const Tag = ({ tag }) => {
  const theme = useTheme();

  const [error, setError] = useState(false);

  // console.log(tag);

  return (
    <Chip mode="flat" onPress={() => console.log("Pressed")}>
      {tag?.name} ({tag?.quoteCount})
    </Chip>
  );
};

export default Tag;

const styles = StyleSheet.create({});
