import { View, Image, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";

import bannerImage from "../assets/uov_banner.png";
import { Text, TextInput, Button } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import Error from "../components/Error";
import { useNavigation } from "@react-navigation/native";
import { students as studentDatabase } from "../assets/Data/StudentsDb.js";

const LoginScreen = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const navigation = useNavigation();

  const handleLogin = () => {
    if (enteredUsername === "" || enteredPassword === "") {
      setHasError(true);
      return;
    }

    const authenticatedStudent = studentDatabase.find(
      (student) =>
        student.username === enteredUsername && student.password === enteredPassword
    );

    if (authenticatedStudent) {
      navigation.navigate("Home", { student: authenticatedStudent });
      setHasError(false);
      setEnteredUsername("");
      setEnteredPassword("");
    } else {
      setHasError(true);
    }
  };

  return (
    <ScrollView>
      <View style={styles.screenContainer}>
        <Image source={bannerImage} style={styles.bannerImage} resizeMode="contain" />
        <Text variant="headlineLarge" style={styles.screenTitle}>
          Student Login
        </Text>
        <View style={styles.formContainer}>
          <TextInput
            label="Username"
            mode="outlined"
            value={enteredUsername}
            theme={{
              colors: {
                background: "#fff",
                outline: "#424242",
                primary: "#000000",
                placeholder: "#000000",
              },
            }}
            contentStyle={{ color: "#000000" }}
            style={styles.inputField}
            onChangeText={(text) => setEnteredUsername(text)}
          />
          <View>
            <TextInput
              label="Password"
              mode="outlined"
              value={enteredPassword}
              secureTextEntry={!isPasswordVisible}
              theme={{
                colors: {
                  background: "#fff",
                  outline: "#424242",
                  primary: "#000000",
                  placeholder: "#000000",
                },
              }}
              contentStyle={{ color: "#000000" }}
              style={styles.inputField}
              onChangeText={(text) => setEnteredPassword(text)}
            />
            {isPasswordVisible ? (
              <Ionicons
                name="eye-off"
                size={25}
                color="#000000"
                style={styles.toggleIcon}
                onPress={() => setIsPasswordVisible(false)}
              />
            ) : (
              <Ionicons
                name="eye"
                size={25}
                color="#000000"
                style={styles.toggleIcon}
                onPress={() => setIsPasswordVisible(true)}
              />
            )}
          </View>
          <Button
            mode="contained"
            buttonColor="#70116d"
            textColor="#fff"
            labelStyle={styles.loginButtonText}
            style={styles.loginButton}
            onPress={handleLogin}
          >
            Login
          </Button>
          {hasError && (
            <Error message="Please check your username and password" />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  bannerImage: {
    width: 350,
    borderRadius: 10,
    marginTop: -25,
  },
  screenTitle: {
    color: "black",
    textTransform: "uppercase",
    textAlign: "center",
  },
  formContainer: {
    marginTop: 50,
    width: 400,
    paddingHorizontal: 16,
    gap: 20,
  },
  inputField: {
    fontSize: 20,
  },
  loginButton: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 15,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  toggleIcon: {
    position: "absolute",
    top: 19,
    right: 20,
  },
});

export default LoginScreen;
