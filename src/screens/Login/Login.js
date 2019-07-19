import React, { useState } from "react";
import { ScrollView, Text } from "react-native";
import { ThemedInput, ThemedButton } from "../../components";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password);

  return (
    <ScrollView>
      <Text>Login</Text>
      <ThemedInput value={email} onChangeText={value => setEmail(value)} />

      <ThemedInput
        value={password}
        onChangeText={value => setPassword(value)}
        secureTextEntry
      />

      <ThemedButton
        title="Login"
        onPress={() => navigation.navigate("Dashboard")}
      />
    </ScrollView>
  );
};

Login.navigationOptions = {
  title: "Login"
};

export default Login;
