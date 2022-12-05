import HomeScreen from "./src/Screens/HomeScreen";
import AccountScreen from "./src/Screens/AboutUsScreen";
import SearchScreen from "./src/Screens/SearchScreen";
import ContactUsScreen from "./src/Screens/AccountScreen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider, Icon, Stack, Button, Box, Flex, HStack, Pressable, Center, Text } from "native-base";
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { customTheme } from "./src/Theme/Index";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from '@expo/vector-icons';
import React from "react";

export default function App(){


    const [selected, setSelected] = React.useState(1);
    return (
    <NativeBaseProvider>
      <Box alignItems="center" justifyContent="center" flex={2}>
          <Text fontSize="30" color="green">Welcome to SiRadio</Text>
          <Button size="lg">Cool Button</Button>
      </Box>
        <Box flex={1} bg="white" safeAreaTop width="100%" maxW="300px" alignSelf="center" justifyContent="flex-end" marginBottom="36">
          <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
            <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => {setSelected(0)}}>
              <Center>
                <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? 'home' : 'home-outline'} />} color="white" size="sm" />
                <Text color="white" fontSize="12">
                  Home
                </Text>
              </Center>
            </Pressable>
            <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
              <Center>
                <Icon mb="1" as={<MaterialIcons name="search" />} color="white" size="sm" />
                <Text color="white" fontSize="12">
                  Search
                </Text>
              </Center>
            </Pressable>
            <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(2)}>
              <Center>
                <Icon mb="1" as={<MaterialCommunityIcons name={selected === 2 ? 'information' : 'information-outline'} />} color="white" size="sm" />
                <Text color="white" fontSize="12">
                  About Us
                </Text>
              </Center>
            </Pressable>
            <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
              <Center>
                <Icon mb="1" as={<MaterialCommunityIcons name={selected === 3 ? 'account' : 'account-outline'} />} color="white" size="sm" />
                <Text color="white" fontSize="12">
                  Account
                </Text>
              </Center>
            </Pressable>
          </HStack>
        </Box>
      </NativeBaseProvider>);
  }
//  const navigation = useNavigation();
    
//   return (
//     <NativeBaseProvider theme={customTheme}>
//       <SafeAreaView>
//   <footer>
//     <Stack direction={{
//       base: "column",
//       md: "row"
//     }} space={4}>
//         <Button 
//         leftIcon={<Icon as={Ionicons} 
//         name="home-outline" 
//         size="sm" />}
//         onPress={() => props.navigation.navigate("HomeScreen")}
//         >
//           Home
//         </Button>
//         <Button variant="subtle" 
//         endIcon={<Icon as={Ionicons} name="help-circle-outline" 
//         size="sm"
//         onPress={() => navigation.navigate("AboutUsScreen")} />}>
//           About Us
//         </Button>
//         <Button 
//         leftIcon={<Icon as={Ionicons} 
//         name="call-outline" 
//         size="sm" 
//         onPress={() => navigation.navigate("ContactUsScreen")}/>}>
//           Contact Us
//         </Button>
//         <Button 
//         leftIcon={<Icon as={Ionicons} 
//         name="settings-outline" 
//         size="sm"
//         onPress={() => navigation.navigate("Settings")} />}>
//           Settings
//         </Button>
//       </Stack>
//       </NavigationContainer>
//       </SafeAreaView>
//       </NativeBaseProvider>
//   )
// };

  // return (
  //   <NativeBaseProvider theme={customTheme}>
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //     <Stack.Screen leftIcon={<Icon as={Ionicons} name="home-outline" size="sm" />} name="HomeScreen" component={HomeScreen} />
  //     <Stack.Screen name="About Us" component={AboutUsScreen} />
  //     <Stack.Screen name="Settings" component={SettingsScreen} />
  //     <Stack.Screen name="Contact Us" component={ContactUsScreen} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  //   </NativeBaseProvider>
  // )};
