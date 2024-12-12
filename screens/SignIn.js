import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { ActivityIndicator, Button } from "react-native";
import { FIREBASE_AUTH } from "../FirebaseConfig";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const LogIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert("You have successfully signed in!");
    //   Redirecting the User to the calculator page
        navigation.navigate("BasicCalculator");
    } catch (error) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const SignUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      alert("You have successfully created an account!");
    } catch (error) {
      console.log(error);
      alert("Sign Up failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Application Name */}
      <Text style={styles.text}>BEES Calculator</Text>
      {/* Email Input */}
      <TextInput
        value={email}
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={setEmail}
      />
      {/* Password Input */}
      <TextInput
        secureTextEntry={true}
        value={password}
        style={styles.input}
        placeholder="Password"
        autoCapitalize="none"
        onChangeText={setPassword}
      />
      {/* Conditional Rendering */}
      {loading ? (
        <ActivityIndicator size="large" color="#FFFF00" />
      ) : (
        <>
          <Button title="Sign In" onPress={LogIn} />
          <Button title="Create Account" onPress={SignUp} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 100,
  },
  input: {
    borderWidth: 1,
    padding: 12,
    width: "80%",
    borderRadius: 8,
    marginVertical: 8,
  },
});

export default SignIn;
