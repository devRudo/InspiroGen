import { Home } from "@/Screens/Home/Home";
import Search from "@/Screens/Search/Search";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainBottomNavigation from "./MainBottomNavigation";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar, StyleSheet, View } from "react-native";
import Signin from "@/Screens/Signin/Signin";
import Signup from "@/Screens/Signup/Signup";

const Stack = createStackNavigator();

export default function AuthNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <Stack.Navigator
      initialRouteName="Signin"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          // paddingBottom: 0,
        },
      }}
    >
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          title: "Inspiro Gen",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="library" color={color} size={size} />
          ),
          headerLeft: () => (
            <Image
              source={require("@/assets/icon.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          title: "Inspiro Gen",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="library" color={color} size={size} />
          ),
          headerLeft: () => (
            <Image
              source={require("@/assets/icon.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
