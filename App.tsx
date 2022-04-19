import React from "react";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native";
import Apploading from "expo-app-loading";
import "intl";
import "intl/locale-data/jsonp/pt-BR";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import theme from "./src/Global/styles/theme";
import { Register } from "./src/screens/Register";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SignIn } from "./src/screens/SignIn";
import { AuthProvider, useAuth } from "./src/hooks/auth";
import { Routes } from "./src/routes";
export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  const { userStorageLoading } = useAuth();

  if (!fontsLoaded || userStorageLoading) {
    return <Apploading />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
