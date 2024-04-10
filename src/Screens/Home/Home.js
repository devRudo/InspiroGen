import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo, setLanguage, setToken } from "@/Redux/User/User";
import Quote from "@/Components/Quote";
import ActionButtons from "@/Components/ActionButtons";
import { useRefreshOnFocus } from "@/Hooks/useRefreshOnFocus";
import { useRandomQuote } from "@/Hooks/useRandomQuote";
import Loader from "@/Components/Loader";
import Error from "@/Components/Error";

export const Home = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { data, refetch, isError, isFetching, error } = useRandomQuote();
  // console.log(user);

  useRefreshOnFocus(refetch); // TODO: Uncomment after all testing is done

  useEffect(() => {
    // refetch();
  }, []);

  return (
    <View style={styles.container}>
      {isFetching ? (
        <Loader />
      ) : isError ? (
        <Error error={error} />
      ) : data ? (
        <>
          <Quote quote={data?.content} author={`- ${data?.author}`} />
          <ActionButtons />
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    gap: 20,
    justifyContent: "center",
  },
});
