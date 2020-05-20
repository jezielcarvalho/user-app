import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import Register from "./src/app/screens/Register";
import Users from "./src/app/screens/Users";
import theme from "./src/app/theme";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: theme.colors.primary,
          showLabel: false,
        }}
      >
        <Tab.Screen
          name="Register"
          component={Register}
          options={{
            tabBarLabel: "Register",
            tabBarIcon: ({ focused }) => (
              <Icon
                name="assignment"
                size={30}
                color={
                  focused ? theme.colors.primary : theme.colors.neutralGray
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Users"
          component={Users}
          options={{
            tabBarLabel: "Register",
            tabBarIcon: ({ focused }) => (
              <Icon
                name="search"
                size={30}
                color={
                  focused ? theme.colors.primary : theme.colors.neutralGray
                }
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
