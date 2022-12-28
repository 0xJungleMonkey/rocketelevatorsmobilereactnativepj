import { StatusBar } from "expo-status-bar";
// import react from "react";
import React, { useState } from "react";
import { Button, TextInput, Text, Card, List } from "react-native-paper";
import { View, Image, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
export default function LoginScreen({ navigation }) {
  const theme = useTheme();

  const [email, setEmail] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.newContainer}>
        <Image style={styles.image} source={require("./assets/logo.jpg")} />
      </View>
      <StatusBar style="auto" />
      <View style={styles.top_bar}>
        <Text
          style={{
            position: "relative",
            fontSize: 28,
            paddingLeft: "3%",
            paddingRight: "3%",
            textAlign: "center",
            color: theme.colors.primary,
          }}
        >
          Enter your mail to get started.
        </Text>
      </View>
      <View
        style={{
          flex: 3,
          paddingLeft: "2%",
          paddingRight: "2%",
        }}
      >
        <Text
          style={{
            color: theme.colors.onBackground,
            fontSize: 16,
            textAlign: "center",
            paddingBottom: "4%",
            opacity: 0.4,
          }}
        >
          {`This app for internal use only. You will need to use work email.`}
        </Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          label="Email"
          mode="outlined "
          placeholder="Type something"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
          right={<TextInput.Affix text="/100" />}
        />
      </View>
      <View style={{ flex: 5 }}>
        <Button
          style={styles.loginBtn}
          mode="contained"
          onPress={() => navigation.navigate("Home")}
        >
          LOGIN
        </Button>
      </View>
      <View
        style={{
          //   flex: 6,
          paddingLeft: "2%",
          paddingRight: "2%",
          position: "relative",
        }}
      >
        <Text
          style={{
            color: theme.colors.secondary,
            fontSize: 14,
            opacity: 0.4,
            marginLeft: 20,
          }}
        >
          By signing up.
        </Text>
      </View>
      <View
        style={{
          //   flex: 7,
          flexDirection: "row",
          position: "relative",
          paddingLeft: "2%",
          paddingRight: "2%",
        }}
      >
        <Text
          style={{
            color: theme.colors.secondary,
            fontSize: 14,
            opacity: 0.4,
            marginLeft: 20,
          }}
        >
          {"You agree to the "}
        </Text>
        <Text
          style={{
            color: theme.colors.secondary,
            fontSize: 15,
            marginRight: 20,
          }}
        >
          {"Terms & Conditions"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  newContainer: {
    flex: 1,
    // display: "inline-block",
    alignItems: "center",
    justifyContent: "center",
  },
  top_bar: {
    flex: 2,
    // flexDirection: "row",
    paddingTop: "3%",
    paddingBottom: "3%",
    paddingLeft: "2%",
    paddingRight: "2%",
    justifyContent: "center",
    // marginBottom: 20,
    // marginTop: 20,
  },
  container: {
    flex: 1,
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  inputView: {
    flex: 4,
    height: 100,
    marginBottom: 20,
  },
  TextInput: {
    margin: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    borderRadius: 25,
    margin: 20,
  },
});