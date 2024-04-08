import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchTab from "@/Screens/SearchTab/SearchTab";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import SearchInput from "@/Components/SearchInput";
import { useTheme } from "react-native-paper";

const Tabs = createMaterialTopTabNavigator();

const SearchMaterialTopNavigator = () => {
  const theme = useTheme();

  return (
    <>
      <SearchInput />
      <Tabs.Navigator
        initialRouteName="Authors"
        screenOptions={
          {
            // tabBarShowLabel: false,
          }
        }
      >
        <Tabs.Screen
          name="Authors"
          component={SearchTab}
          options={{
            title: "Authors",
          }}
        />
        <Tabs.Screen
          name="Quotes"
          component={SearchTab}
          options={{
            title: "Quotes",
          }}
        />
        <Tabs.Screen
          name="Tags"
          component={SearchTab}
          options={{
            title: "Tags",
          }}
        />
      </Tabs.Navigator>
    </>
  );
};

export default SearchMaterialTopNavigator;
