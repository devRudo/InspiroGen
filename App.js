import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { persistor, store } from "@/Redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Home } from "@/Screens/Home/Home";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Home />
        <StatusBar style="auto" />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({});
