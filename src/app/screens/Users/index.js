import React from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

const data = [
  {
    name: "Jeziel Lopes de Carvalho",
    email: "jeziel.carvalho@a.unileste.edu.br",
  },
  {
    name: "Jeziel Lopes de Carvalho",
    email: "jeziel.carvalho@a.unileste.edu.br",
  },
  {
    name: "Jeziel Lopes de Carvalho",
    email: "jeziel.carvalho@a.unileste.edu.br",
  },
  {
    name: "Jeziel Lopes de Carvalho",
    email: "jeziel.carvalho@a.unileste.edu.br",
  },
  {
    name: "Jeziel Lopes de Carvalho",
    email: "jeziel.carvalho@a.unileste.edu.br",
  },
  {
    name: "Jeziel Lopes de Carvalho",
    email: "jeziel.carvalho@a.unileste.edu.br",
  },
  {
    name: "Jeziel Lopes de Carvalho",
    email: "jeziel.carvalho@a.unileste.edu.br",
  },
  {
    name: "Jeziel Lopes de Carvalho",
    email: "jeziel.carvalho@a.unileste.edu.br",
  },
  {
    name: "Jeziel Lopes de Carvalho",
    email: "jeziel.carvalho@a.unileste.edu.br",
  },
  {
    name: "Jeziel Lopes de Carvalho",
    email: "jeziel.carvalho@a.unileste.edu.br",
  },
  {
    name: "Jeziel Lopes de Carvalho",
    email: "jeziel.carvalho@a.unileste.edu.br",
  },
  {
    name: "Jeziel Lopes de Carvalho",
    email: "jeziel.carvalho@a.unileste.edu.br",
  },
  {
    name: "Jeziel Lopes de Carvalho",
    email: "jeziel.carvalho@a.unileste.edu.br",
  },
  {
    name: "Jeziel Lopes de Carvalho",
    email: "jeziel.carvalho@a.unileste.edu.br",
  },
  {
    name: "Jeziel Lopes de Carvalho",
    email: "jeziel.carvalho@a.unileste.edu.br",
  },
  {
    name: "Jeziel Lopes de Carvalho",
    email: "jeziel.carvalho@a.unileste.edu.br",
  },
  {
    name: "Jeziel Lopes de Carvalho",
    email: "jeziel.carvalho@a.unileste.edu.br",
  },
  {
    name: "Jeziel Lopes de Carvalho",
    email: "jeziel.carvalho@a.unileste.edu.br",
  },
  {
    name: "Jeziel Lopes de Carvalho",
    email: "jeziel.carvalho@a.unileste.edu.br",
  },
];

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.textItem}>{item.name}</Text>
      <Text style={styles.textItemSmall}>{item.email}</Text>
    </View>
  );
}

export default function Register() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="pesquisar por nome ou email"
        style={styles.textInput}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
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
    marginTop: 40,
    marginBottom: 20,
    width: "100%",
  },
  listItem: {
    backgroundColor: "#eee",
    margin: 5,
    height: 50,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  textItem: {
    color: "#555",
  },
  textItemSmall: {
    color: "#999",
    fontSize: 11,
  },
});
