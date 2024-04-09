import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { persistor, store } from "@/Redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import AppNavigation from "@/Navigations/AppNavigation";
import { SafeAreaView } from "react-native-safe-area-context";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: "always", retry: false },
    mutations: {},
  },
});

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
          <QueryClientProvider client={queryClient}>
            <SafeAreaView style={styles.container}>
              <StatusBar barStyle={"dark-content"} style="auto" />
              <AppNavigation />
            </SafeAreaView>
          </QueryClientProvider>
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
