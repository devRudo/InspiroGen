import { Home } from "@/Screens/Home/Home";
import Search from "@/Screens/Search/Search";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainBottomNavigation from "./MainBottomNavigation";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar, StyleSheet, View } from "react-native";

const Stack = createStackNavigator();

export default function ProtectedNavigator() {
  const insets = useSafeAreaInsets();

  return <MainBottomNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
