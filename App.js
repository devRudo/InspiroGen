import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { persistor, store } from "@/Redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider, focusManager } from "react-query";
import { isWeb } from "@/Utils/common";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import AppNavigation from "@/Navigations/AppNavigation";
import { useAppState } from "@/Hooks/useAppState";
import { useOnlineManager } from "@/Hooks/useOnlineManager";
import { SafeAreaProvider } from "react-native-safe-area-context";

function onAppStateChange(status) {
  // React Query already supports in web browser refetch on window focus by default
  if (!isWeb) {
    focusManager.setFocused(status === "active");
  }
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: false },
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

  useAppState(onAppStateChange);

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <SafeAreaProvider>
              <AppNavigation />
            </SafeAreaProvider>
          </QueryClientProvider>
        </PersistGate>
      </PaperProvider>
    </Provider>
  );
}
