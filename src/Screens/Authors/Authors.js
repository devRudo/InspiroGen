import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "react-native-paper";
import { useListAuthors } from "@/Hooks/useListAuthors";
import Loader from "@/Components/Loader";
import Error from "@/Components/Error";
import { useListQuoteByTag } from "@/Hooks/useListQuoteByTag";
import { useListQuoteByAuthor } from "@/Hooks/useListQuotesByAuthor";
import { useRefreshOnFocus } from "@/Hooks/useRefreshOnFocus";
import Author from "@/Components/Author";
import Tag from "@/Components/Tag";
import { useListTags } from "@/Hooks/useListTags";

const Authors = ({ navigation }) => {
  const theme = useTheme();

  const { data, refetch, isError, isFetching, error, isLoading } =
    useListAuthors();

  useRefreshOnFocus(refetch);

  console.log("isLoading", isLoading);

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.background }}
    >
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Error error={error} />
      ) : data ? (
        <>
          {isFetching ? (
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 20,
              }}
            >
              <ActivityIndicator
                animating={true}
                color={theme.colors.primary}
                size="small"
              />
              <Text>refreshing list ...</Text>
            </View>
          ) : null}
          <FlatList
            // ListHeaderComponent={() => {
            //   return (
            //     <Image
            //       source={require("@/assets/icon.png")}
            //       style={{
            //         marginTop: -80,
            //         width: SCREEN_WIDTH - 40,
            //         height: 200,
            //         resizeMode: "contain",
            //       }}
            //     />
            //   );
            // }}
            contentContainerStyle={{
              paddingVertical: 15,
              paddingHorizontal: 15,
              gap: 15,
            }}
            data={data}
            keyExtractor={(item) => item._id}
            renderItem={({ item, index }) => (
              <Author author={item} index={index} />
            )}
            // showsVerticalScrollIndicator={false}
          />
        </>
      ) : null}
    </View>
  );
};

export default Authors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
