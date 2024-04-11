import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import {
  TextInput,
  Button,
  Snackbar,
  Title,
  useTheme,
  Divider,
} from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { supabase } from "@/Utils/supabase";

const Signin = ({ navigation }) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleLogin = async () => {
    // Perform login logic here
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      setSnackbarMessage(error.message);
      setSnackbarVisible(true);
    }
    setLoading(false);
  };

  return (
    <View
      style={{
        ...styles.container,
        // backgroundColor: ,
      }}
    >
      <Image
        source={require("@/assets/icon.png")}
        style={{ width: 120, height: 120 }}
      />
      <Title style={styles.title}>Login</Title>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          gap: 5,
          paddingVertical: 15,
        }}
      >
        <Text>Don't have an account?</Text>
        <TouchableOpacity
          style={{ alignSelf: "flex-end" }}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={{ color: theme.colors.primary }}>Signup</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        mode="outlined"
        placeholder="Email or Username"
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
        style={{
          ...styles.input,
        }}
      />

      <TextInput
        mode="outlined"
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={{ ...styles.input, borderColor: theme.colors.secondary }}
      />

      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
      <TouchableOpacity style={{ marginTop: 10 }}>
        <Text>Forgot Password?</Text>
      </TouchableOpacity>
      {/* <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          gap: 5,
        }}
      >
        <Divider width={"45%"} style={{ backgroundColor: "#aaa" }} />
        <Text style={{ paddingVertical: 20 }}>OR</Text>
        <Divider width={"45%"} style={{ backgroundColor: "#aaa" }} />
      </View> */}
      {/* <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          gap: 5,
        }}
      >
        <Button
          icon={() => <Ionicons color={"#fff"} name="logo-google" size={24} />}
          mode="contained"
          onPress={handleLogin}
          style={{ ...styles.button, backgroundColor: "#d04939" }}
        >
          Login with Google
        </Button>
      </View> */}
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
      >
        {snackbarMessage}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    marginBottom: 20,
    // color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    marginBottom: 10,
    backgroundColor: "transparent",
  },
  button: {
    marginTop: 10,
  },
  buttonOutline: {
    width: "100%",
    marginTop: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default Signin;
