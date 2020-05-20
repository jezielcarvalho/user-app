import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import api from "../../services/api";
import theme from "../../theme";

export default function Register() {
  // DEFINE AS VARIÁVEIS E MÉTODOS DO ESTADO DO COMPONENTE
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameInput, setNameInput] = useState(null);
  const [emailInput, setEmailInput] = useState(null);

  const hideKeyboard = () => {
    nameInput.blur();
    emailInput.blur();
  };

  // ALTERA O CAMPO NOME
  const handleChangeName = ({ nativeEvent }) => setName(nativeEvent.text);

  // ALTERA O CAMPO EMAIL
  const handleChangeEmail = ({ nativeEvent }) => setEmail(nativeEvent.text);

  // REGISTRA UM NOVO USUÁRIO
  const handleRegister = async () => {
    hideKeyboard();

    if (name.length > 3 && email.length > 3) {
      try {
        const response = await api.post("users/create", {
          name,
          email,
        });

        if (response.data) {
          setName("");
          setEmail("");
          Alert.alert("Usuário registrado com sucesso");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  // RENDERIZA A TELA DE REGISTRO
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The User App</Text>
      <TextInput
        ref={(input) => setNameInput(input)}
        placeholder="insira o nome"
        style={styles.textInput}
        onChange={handleChangeName}
        value={name}
      />
      <TextInput
        ref={(input) => setEmailInput(input)}
        placeholder="insira o email"
        style={styles.textInput}
        onChange={handleChangeEmail}
        value={email}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    color: theme.colors.primary,
    fontFamily: theme.font.family,
    fontSize: 30,
  },
  textInput: {
    backgroundColor: theme.colors.lightGray,
    fontFamily: theme.font.family,
    fontSize: 15,
    color: theme.colors.darkGray,
    paddingVertical: 10,
    paddingHorizontal: 20,

    borderRadius: 30,
    marginTop: 20,
    width: "100%",
  },
  button: {
    backgroundColor: theme.colors.primary,
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
    color: theme.colors.white,
    fontFamily: theme.font.family,
  },
});
