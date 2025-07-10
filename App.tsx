import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import { StatusBar } from "expo-status-bar"
import { Ionicons } from "@expo/vector-icons"

import HomeScreen from "./src/screens/HomeScreen"
import TasksScreen from "./src/screens/TasksScreen"
import HistoryScreen from "./src/screens/HistoryScreen"
import ProfileScreen from "./src/screens/ProfileScreen"
import ClimateScreen from "./src/screens/ClimateScreen"
import CreateTaskModal from "./src/components/CreateTaskModal"
import VerifyTaskModal from "./src/components/VerifyTaskModal"

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap

          if (route.name === "Inicio") {
            iconName = focused ? "home" : "home-outline"
          } else if (route.name === "Tareas") {
            iconName = focused ? "checkmark-circle" : "checkmark-circle-outline"
          } else if (route.name === "Historial") {
            iconName = focused ? "time" : "time-outline"
          } else if (route.name === "Perfil") {
            iconName = focused ? "person" : "person-outline"
          } else if (route.name === "Clima") {
            iconName = focused ? "partly-sunny" : "partly-sunny-outline"
          } else {
            iconName = "home-outline"
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: "#4A9B8E",
        tabBarInactiveTintColor: "#718096",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopColor: "#E2E8F0",
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Tareas" component={TasksScreen} />
      <Tab.Screen name="Historial" component={HistoryScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
      <Tab.Screen name="Clima" component={ClimateScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="CreateTask" component={CreateTaskModal} options={{ presentation: "modal" }} />
        <Stack.Screen name="VerifyTask" component={VerifyTaskModal} options={{ presentation: "modal" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
