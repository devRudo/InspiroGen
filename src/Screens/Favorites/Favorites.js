import { StyleSheet, Image, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo, setLanguage, setToken } from "@/Redux/User/User";
import FavoriteQuote from "@/Components/FavoriteQuote";
import { SCREEN_WIDTH } from "@/Utils/common";

export const Favorites = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [isFetching, setIsFetching] = React.useState(false);

  console.log(user);

  useEffect(() => {
    // dispatch(setUserInfo("test"));
    // dispatch(setToken("test"));
    // dispatch(setLanguage("test"));
  }, []);

  const renderItem = ({ item, index }) => {
    return (
      <FavoriteQuote
        quote={
          "Headline Medium Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work."
        }
        author={"- A.P.J. Abdul Kalam"}
      />
    );
  };

  return (
    <View style={styles.container}>
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
          paddingVertical: 20,
          paddingHorizontal: 20,
          gap: 15,
        }}
        data={isFetching ? [] : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={(item) => item.toString()}
        renderItem={renderItem}
        // showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
  },
});
