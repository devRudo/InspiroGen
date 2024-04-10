import { StyleSheet, View, ActivityIndicator, Image } from "react-native";
import React, { useCallback, useState } from "react";
import {
  useTheme,
  Text,
  Avatar,
  Card,
  IconButton,
  Divider,
} from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ActionButtons from "./ActionButtons";
import * as Linking from "expo-linking";

const Author = ({ author }) => {
  const theme = useTheme();

  const [error, setError] = useState(false);
  const [expanded, setExpanded] = useState("");

  const getProfileImageURL = useCallback((authorSlug, size = 200) => {
    const IMAGE_BASE = "https://images.quotable.dev/profile";
    return `${IMAGE_BASE}/${size}/${authorSlug}.jpg`;
  }, []);

  return (
    <Card style={{ ...styles.mainContainer }}>
      <View
        style={{
          gap: 15,
          flexDirection: "row",
          alignItems: "center",
          padding: 20,
          width: "100%",
        }}
      >
        {error ? (
          <Avatar.Text
            label={author?.name
              ?.split(" ")
              ?.map((word) => word[0])
              ?.join(" ")}
            size={60}
          />
        ) : getProfileImageURL(author?.slug) ? (
          <Avatar.Image
            source={{ uri: getProfileImageURL(author?.slug) }}
            size={60}
            onError={() => setError(true)}
          />
        ) : (
          <Avatar.Text
            label={author?.name
              ?.split(" ")
              ?.map((word) => word[0])
              ?.join(" ")}
            size={60}
          />
        )}
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <View
            style={{
              gap: 5,
              width: "85%",
            }}
          >
            <Text variant="titleMedium">{author.name}</Text>
            <Text variant="bodyMedium">{author.description}</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            {expanded === author?._id ? (
              <IconButton
                icon={() => <Ionicons name="chevron-up-outline" size={20} />}
                iconColor={theme.colors.primary}
                size={20}
                onPress={() => setExpanded("")}
              />
            ) : (
              <IconButton
                icon={() => <Ionicons name="chevron-down-outline" size={20} />}
                iconColor={theme.colors.primary}
                size={20}
                onPress={() => setExpanded(author?._id)}
              />
            )}
          </View>
        </View>
      </View>
      {expanded === author?._id ? (
        <>
          <Divider />
          <View style={{ padding: 15, gap: 5 }}>
            <Text variant="bodyMedium">{author?.bio}</Text>
            <Divider />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text variant="bodyMedium" style={{ fontWeight: "bold" }}>
                Quotes: {author?.quoteCount}
              </Text>
              <IconButton
                icon={() => <Ionicons name="open-outline" size={16} />}
                iconColor={theme.colors.primary}
                size={20}
                onPress={() => Linking.openURL(author.link)}
              />
            </View>
          </View>
        </>
      ) : null}
    </Card>
  );
};

export default Author;

const styles = StyleSheet.create({
  mainContainer: {
    gap: 5,
    backgroundColor: "#fff",
  },
});
