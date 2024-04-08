import { StyleSheet, View, ActivityIndicator } from "react-native";
import React from "react";
import { useTheme, Text, IconButton } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const ActionButtons = ({}) => {
  const theme = useTheme();

  console.log(theme.colors.primary);
  return (
    <View style={{ ...styles.mainContainer }}>
      <IconButton
        mode="contained"
        icon={() => <Ionicons name="refresh" size={24} />}
        iconColor={theme.colors.primary}
        size={24}
        onPress={() => console.log("Pressed")}
      />
      <IconButton
        mode="contained"
        icon={() => <Ionicons name="heart-outline" size={24} />}
        iconColor={theme.colors.primary}
        size={24}
        onPress={() => console.log("Pressed")}
      />
      <IconButton
        mode="contained"
        icon={() => <Ionicons name="share-outline" size={24} />}
        iconColor={theme.colors.primary}
        size={24}
        onPress={() => console.log("Pressed")}
      />
      <IconButton
        mode="contained"
        icon={() => <Ionicons name="download-outline" size={24} />}
        iconColor={theme.colors.primary}
        size={24}
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
};

export default ActionButtons;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
