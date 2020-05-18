import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Register() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="insira o nome" style={styles.textInput} />
      <TextInput placeholder="insira o email" style={styles.textInput} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  textInput: {
    backgroundColor: "#eee",
    fontFamily: "Roboto",
    fontSize: 15,
    color: "#555",
    paddingVertical: 10,
    paddingHorizontal: 20,
    lineHeight: 50,
    borderRadius: 30,
    marginTop: 20,
    width: "100%",
  },
  button: {
    backgroundColor: "#e91e63",
    fontSize: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    lineHeight: 50,
    borderRadius: 30,
    marginTop: 20,
    width: "50%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Roboto",
  },
});
