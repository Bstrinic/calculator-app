import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./screens/SplashScreen";
import BasicCalculator from "./screens/BasicCalculator";
import ScientificCalculator from "./screens/ScientificCalculator";
import SignIn from "./screens/SignIn";
import SavedCalculations from "./screens/SavedCalculations";
import MyHeader from "./components/MyHeader";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createStackNavigator();

export default function App() {
  // Manage dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle the dark mode theme
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={({ navigation, route }) => ({
            header: () => (
              <MyHeader
                navigation={navigation}
                title={route.name}
                isEnabled={isDarkMode}
                toggleSwitch={toggleTheme}
              />
            ),
            headerStyle: {
              backgroundColor: isDarkMode ? "#000" : "#fff", // Dynamic header background
            },
            headerTintColor: isDarkMode ? "#fff" : "#000", // Dynamic header text color
            headerBackTitleVisible: false,
          })}
        >
          {/* Splash Screen */}
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          {/* Basic Calculator */}
          <Stack.Screen
            name="BasicCalculator"
            component={(props) => (
              <BasicCalculator {...props} isDarkMode={isDarkMode} />
            )}
          />
          {/* Scientific Calculator */}
          <Stack.Screen
            name="ScientificCalculator"
            component={(props) => (
              <ScientificCalculator {...props} isDarkMode={isDarkMode} />
            )}
          />
          {/* Sign In */}
          <Stack.Screen
            name="SignIn"
            component={(props) => <SignIn {...props} />}
          />
          {/* Saved Calculations */}
          <Stack.Screen
            name="SavedCalculations"
            component={(props) => <SavedCalculations {...props} />}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
