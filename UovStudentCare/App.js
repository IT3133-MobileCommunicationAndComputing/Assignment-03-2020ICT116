import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { PaperProvider } from "react-native-paper";

const AppNavigator = createNativeStackNavigator();

const applicationTitle = "UOV Student Care";

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <AppNavigator.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#70116d" },
              headerTitleStyle: { color: "#fff" },
              headerTitleAlign: "center",
              headerTintColor: "#fff",
            }}
            initialRouteName="Login"
          >
            <AppNavigator.Screen
              name="Login"
              component={LoginScreen}
              options={{ title: applicationTitle }}
            />
            <AppNavigator.Screen
              name="Profile"
              component={ProfileScreen}
              options={{ title: applicationTitle }}
            />
          </AppNavigator.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
