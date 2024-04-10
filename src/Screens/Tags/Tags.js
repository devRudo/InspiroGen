import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import { useTheme } from "react-native-paper";
import Loader from "@/Components/Loader";
import Error from "@/Components/Error";
import Tag from "@/Components/Tag";
import { useListTags } from "@/Hooks/useListTags";
import { useRefreshOnFocus } from "@/Hooks/useRefreshOnFocus";

const Tags = ({ navigation }) => {
  const theme = useTheme();

  const { data, refetch, isError, isFetching, error, isLoading } =
    useListTags();

  useRefreshOnFocus(refetch);

  // console.log(data);
  // console.log(route.name);
  // console.log(routeName);
  // console.log(navigation.state);

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
          <ScrollView
            contentContainerStyle={{
              paddingVertical: 20,
              paddingHorizontal: 20,
              gap: 15,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {data?.map((tag, index) => (
              <Tag key={`${tag}${index}`} tag={tag} />
            ))}
          </ScrollView>
        </>
      ) : null}
    </View>
  );
};

export default Tags;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
