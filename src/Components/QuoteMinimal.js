import { StyleSheet, View, ActivityIndicator, Image } from "react-native";
import React, { useCallback, useState } from "react";
import { useTheme, Text, Avatar } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import ActionButtons from "./ActionButtons";

const QuoteMinimal = ({ author }) => {
  const theme = useTheme();

  const [error, setError] = useState(false);

  const getProfileImageURL = useCallback((authorSlug, size = 200) => {
    const IMAGE_BASE = "https://images.quotable.dev/profile";
    return `${IMAGE_BASE}/${size}/${authorSlug}.jpg`;
  }, []);

  // console.log(theme.colors.primary);
  // console.log(getProfileImageURL(author?.slug));
  // console.log(error);
  return (
    <View style={{ ...styles.mainContainer }}>
      <View
        style={{
          gap: 15,
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          paddingBottom: 10,
          borderWidth: 1,
          borderColor: "#d3d3d3",
        }}
      >
        {error ? (
          <Avatar.Text
            label={author?.name
              ?.split(" ")
              ?.map((word) => word[0])
              ?.join(" ")}
            size={70}
          />
        ) : getProfileImageURL(author?.slug) ? (
          <Avatar.Image
            source={{ uri: getProfileImageURL(author?.slug) }}
            size={70}
            onError={() => setError(true)}
          />
        ) : (
          <Avatar.Text
            label={author?.name
              ?.split(" ")
              ?.map((word) => word[0])
              ?.join(" ")}
            size={70}
          />
        )}
        <View style={{ alignItems: "flex-start" }}>
          <View style={{ gap: 3, alignItems: "flex-start" }}>
            <Text variant="titleMedium">{author.name}</Text>
            <Text variant="bodySmall">author.description</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default QuoteMinimal;

const styles = StyleSheet.create({
  mainContainer: {
    gap: 10,
  },
});
