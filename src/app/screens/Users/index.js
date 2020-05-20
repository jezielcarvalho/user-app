import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import api from "../../services/api";
import theme from "../../theme";

// RENDERIZA UM ITEM DA LISTA
function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.textItem}>{item.name}</Text>
      <Text style={styles.textItemSmall}>{item.email}</Text>
    </View>
  );
}

export default function Register() {
  // DEFINE AS VARIÁVEIS E MÉTODOS DO ESTADO DO COMPONENTE
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState(null);
  const [search, setSearch] = useState("");

  /**
   * HOOK EXECUTADO TODA VEZ QUE O COMPONENTE RECARREGAR
   */
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    // BUSCA USUÁRIOS NA API
    const users = await getUsers();

    // DEFINE OS USUÁRIOS NO ESTADO DO COMPONENTE
    setUsers(users);

    setTimeout(() => {
      if (users.length > 0) {
        setLoading(false);
      }
    }, 1000);
  };

  /**
   *  CARREGA A LISTA DE USUÁRIOS DA API
   */
  const getUsers = async () => {
    try {
      const response = await api.get("users");

      if (response.data) {
        return response.data;
      }
    } catch (err) {
      console.log("error", err);

      return [];
    }

    return [];
  };

  /**
   * CARREGA USUÁRIO PESQUISADO
   */
  const searchUsers = async () => {
    try {
      const response = await api.get(`users/search/${search}`);

      if (response.data) {
        return response.data;
      }
    } catch (err) {
      console.log("error", err);

      return [];
    }

    return [];
  };

  const handlePressSearch = () => {
    if (searchInput.isFocused()) {
      searchInput.blur();
    } else {
      searchInput.focus();
    }
  };

  /**
   * INICIA A PESQUISA POR NOME DE USUÁRIO
   */
  const handleSearch = async () => {
    searchInput.blur();

    // SE HOUVER TEXTP NO CAMPO DE PESQUISA
    if (search) {
      setLoading(true);

      // LISTA USUÁRIO PESQUISADO
      const data = await searchUsers();

      // LIMPA CAMPO DE PESQUISA
      setSearch("");

      // DEFINE OS USUÁRIOS NO ESTADO DO COMPONENTE
      setUsers(data);

      setTimeout(() => {
        if (data.length > 0) {
          setLoading(false);
        }
      }, 1000);
    }
  };

  /**
   * DEFINE TEXTO PARA A PESQUISA
   */
  const handleChangeSearch = ({ nativeEvent }) => setSearch(nativeEvent.text);

  /**
   * RECARREGA A LISTA NOVAMENTE
   */
  const handleRefresh = () => {
    searchInput.blur();
    setLoading(true);
    loadUsers();
  };

  // RENDERIZA LISTA DE USUÁRIOS
  return (
    <View style={styles.container}>
      <View style={styles.searchInput}>
        <TouchableOpacity onPress={handlePressSearch}>
          <Icon
            style={styles.icon}
            name="search"
            size={25}
            color={theme.colors.primary}
          />
        </TouchableOpacity>

        <TextInput
          ref={(input) => setSearchInput(input)}
          style={styles.textInput}
          onChange={handleChangeSearch}
          placeholder="pesquisar por nome"
          value={search}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Icon
            style={styles.iconRight}
            name="check"
            size={25}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        {loading ? (
          <ActivityIndicator
            style={styles.loading}
            color={theme.colors.primary}
          />
        ) : (
          <FlatList
            data={users}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => String(users.indexOf(item))}
            refreshControl={
              <RefreshControl
                enabled
                progressBackgroundColor={theme.colors.darkGray}
                style={{ backgroundColor: theme.colors.white }}
                tintColor={theme.colors.white}
                colors={[theme.colors.white]}
                refreshing={loading}
                onRefresh={handleRefresh}
              />
            }
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: theme.colors.white,
    padding: 20,
  },
  body: {
    height: "80%",
    justifyContent: "center",
  },
  searchInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.lightGray,
    color: theme.colors.darkGray,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 40,
    marginBottom: 20,
    width: "100%",
  },
  textInput: {
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: theme.colors.lightGray,
    fontFamily: theme.font.family,
    fontSize: 15,
    color: theme.colors.darkGray,
    width: "85%",
  },
  icon: {
    marginTop: 5,
    marginHorizontal: 5,
  },
  iconRight: {
    marginHorizontal: 5,
  },
  listItem: {
    backgroundColor: theme.colors.lightGray,
    margin: 5,
    height: 50,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  textItem: {
    color: theme.colors.darkGray,
  },
  textItemSmall: {
    color: theme.colors.middleGray,
    fontSize: 11,
  },
  loading: {
    justifyContent: "center",
  },
});
