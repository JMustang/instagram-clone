import { StatusBar } from "expo-status-bar";
import React from "react";

import * as firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABzFuzl_6y_Hf3rB0jf0_i33RBzDVbCbM",
  authDomain: "instagram-clone-d7a84.firebaseapp.com",
  projectId: "instagram-clone-d7a84",
  storageBucket: "instagram-clone-d7a84.appspot.com",
  messagingSenderId: "5168269654",
  appId: "1:5168269654:web:e1d5ea84d47c810b8feef7",
  measurementId: "G-NFDJXDHNV4",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
