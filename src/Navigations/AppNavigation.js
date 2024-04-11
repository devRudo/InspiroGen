import { Home } from "@/Screens/Home/Home";
import Search from "@/Screens/Search/Search";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainBottomNavigation from "./MainBottomNavigation";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar, StyleSheet, View } from "react-native";
import ProtectedNavigator from "./ProtectedNavigator";
import AuthNavigator from "./AuthNavigator";
import { supabase } from "@/Utils/supabase";
import { setToken, setUserInfo } from "@/Redux/User/User";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const Stack = createStackNavigator();

export default function AppNavigation() {
  const insets = useSafeAreaInsets();
  const { userInfo, token, language } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      // console.log("session", session);
      dispatch(setToken(session?.access_token));
      dispatch(setUserInfo(session?.user));
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      // console.log("session", session);
      dispatch(setToken(session?.access_token));
      dispatch(setUserInfo(session?.user));
    });
  }, []);

  // console.log(userInfo, token, language);

  return (
    <View
      style={{
        ...styles.container,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <StatusBar barStyle={"dark-content"} style="auto" />
      <NavigationContainer>
        {token && userInfo ? <ProtectedNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
