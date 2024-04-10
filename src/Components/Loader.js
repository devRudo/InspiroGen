import { StyleSheet, View, ActivityIndicator } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";

const Loader = ({}) => {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <ActivityIndicator
        animating={true}
        color={theme.colors.primary}
        size="large"
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
