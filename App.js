import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { persistor, store } from "@/Redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Home } from "@/Screens/Home/Home";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import AppNavigation from "@/Navigations/AppNavigation";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#4578c1",
      secondary: "#faab04",
    },
  };

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"dark-content"} style="auto" />
            <AppNavigation />
          </SafeAreaView>
        </PersistGate>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
