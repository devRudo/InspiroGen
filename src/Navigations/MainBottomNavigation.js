import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "@/Screens/Home/Home";
import Search from "@/Screens/Search/Search";
import { Ionicons } from "@expo/vector-icons";
import { Profile } from "@/Screens/Profile/Profile";
import { Favorites } from "@/Screens/Favorites/Favorites";
import SearchMaterialTopNavigator from "./SearchMaterialTopNavigator";

const Tabs = createBottomTabNavigator();

const MainBottomNavigation = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
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
          //   headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Search"
        component={SearchMaterialTopNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};

export default MainBottomNavigation;
