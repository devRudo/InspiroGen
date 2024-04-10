import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import { useTheme } from "react-native-paper";

const Error = ({ error }) => {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Text
        variant="titleMedium"
        style={{ textAlign: "center", color: theme.colors.error }}
      >
        {error === "AxiosError: Network Error"
          ? "Oops! No Internet. Please connect to Internet and try again."
          : error}
      </Text>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({});
