import HomeScreen from "./src/Screens/HomeScreen";
import AboutUsScreen from "./src/Screens/AboutUsScreen";
import NewScreen from "./src/Screens/NewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider } from "native-base";
import { customTheme } from "./src/Theme/Index";

export default function App(){

  
  const Tab = createBottomTabNavigator();
    

  return (
    <NativeBaseProvider theme={customTheme}>
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="About Us" component={AboutUsScreen} />
      <Tab.Screen name="New Screen" component={NewScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  )};
