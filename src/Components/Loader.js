import { StyleSheet, View, ActivityIndicator } from "react-native";
import React from "react";

const Loader = ({}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <ActivityIndicator size="small" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});