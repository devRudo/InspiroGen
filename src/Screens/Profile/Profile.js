import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo, setLanguage, setToken } from "@/Redux/User/User";

export const Profile = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(user);

  useEffect(() => {
    // dispatch(setUserInfo("test"));
    // dispatch(setToken("test"));
    // dispatch(setLanguage("test"));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Inspiro Gen</Text>
      <Text
        style={{
          textAlign: "center",
          marginTop: 10,
          padding: 16,
        }}
      >
        User Profile
      </Text>
      {/* <Button
        title="Go to Search"
        onPress={() => navigation.navigate("Search")}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
