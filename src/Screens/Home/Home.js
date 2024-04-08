import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo, setLanguage, setToken } from "@/Redux/User/User";
import Quote from "@/Components/Quote";
import ActionButtons from "@/Components/ActionButtons";

export const Home = ({ navigation }) => {
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
      <Quote
        quote={
          "Headline Medium Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work."
        }
        author={"- A.P.J. Abdul Kalam"}
      />
      <ActionButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    gap: 20,
  },
});
