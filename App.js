import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import Register from "./src/app/screens/Register";
import Users from "./src/app/screens/Users";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#e91e63",
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
                color={focused ? "#e91e63" : "#ddd"}
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
                color={focused ? "#e91e63" : "#ddd"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
