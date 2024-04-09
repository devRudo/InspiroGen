import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import {
  Text,
  Chip,
  Divider,
  List,
  useTheme,
  Button,
} from "react-native-paper";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo, setLanguage, setToken } from "@/Redux/User/User";
import { Ionicons } from "@expo/vector-icons";

export const Profile = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const theme = useTheme();

  console.log(user);

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          gap: 20,
          flexDirection: "row",
          alignItems: "center",
          padding: 20,
          paddingBottom: 10,
        }}
      >
        <View
          style={{
            width: 90,
            height: 90,
            borderRadius: 60,
            borderWidth: 1,
            borderColor: "#f1f1f1",
            borderStyle: "solid",
            backgroundColor: "#fff",
          }}
        >
          <Image
            source={require("@/assets/icon.png")}
            style={{ width: 90, height: 90 }}
          />
        </View>
        <View style={{ alignItems: "flex-start" }}>
          <View style={{ gap: 3, alignItems: "flex-start" }}>
            <Text variant="titleMedium">Vijay Kumar Mishra</Text>
            <Text variant="bodySmall">Hyderabad, Telangana, India</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 5,
          alignSelf: "center",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: 20,
        }}
      >
        {[
          "Calm",
          "Seasonal",
          "Self Love",
          "Motivational",
          "Life",
          "Adventure",
        ].map((item) => (
          <Chip ellipsizeMode={"clip"} onPress={() => console.log("Pressed")}>
            {item}
          </Chip>
        ))}
      </View>
      <View
        style={{
          gap: 5,
        }}
      >
        <Divider />
        <List.Item
          style={{ padding: 20 }}
          title="Profile"
          left={(props) => <Ionicons name="person-outline" size={24} />}
          onPress={() => {}}
        />
        <Divider />
        <List.Item
          style={{ padding: 20 }}
          title="Preferences"
          left={(props) => <Ionicons name="settings-outline" size={24} />}
          onPress={() => {}}
        />
        <Divider />
        <List.Item
          style={{ padding: 20 }}
          title="Refer a friend"
          left={(props) => <Ionicons name="open-outline" size={24} />}
          onPress={() => {}}
        />
        <Divider />
        <List.Item
          style={{ padding: 20 }}
          title="Language"
          left={(props) => <Ionicons name="globe-outline" size={24} />}
          onPress={() => {}}
        />
        <Divider />
      </View>
      <Button
        icon={() => (
          <Ionicons size={24} name="exit-outline" color={theme.colors.error} />
        )}
        mode="outlined"
        textColor={theme.colors.error}
        onPress={() => {}}
        style={{
          borderColor: theme.colors.error,
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        Logout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
