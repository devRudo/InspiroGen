/* eslint-disable react-hooks/rules-of-hooks */
import { Dimensions, Platform } from "react-native";

const isWeb = () => {
  return Platform.OS === "web";
};

const isIOS = () => {
  return Platform.OS === "ios";
};

const isAndroid = () => {
  return Platform.OS === "android";
};

const formatNumber = (x) => {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const randomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

export {
  isWeb,
  isIOS,
  isAndroid,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  formatNumber,
  randomColor,
};
