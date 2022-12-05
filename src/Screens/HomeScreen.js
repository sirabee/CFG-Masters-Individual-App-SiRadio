// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import MyButton from '../Components/MyButton';
import { Text, Button, Box, VStack, Heading } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen({navigation}) {
  

  return (
      <SafeAreaView>
        <Box>
        <VStack w="100%" space={4} px="2" mt="4" alignItems="center" justifyContent="center">
        <Heading color="green.600">Welcome to SiRadio</Heading>
        <MyButton details="Cool button"></MyButton>
        <Button size="md" variant="solid" colorScheme="primary">Cool Button</Button>
     <Button color="red">Home Screen</Button>
     <Button variant="link" onPress={() => navigation.navigate('About Us')}>Go to About Us</Button>
     </VStack>
     </Box>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontStyle: 'italic',
    },
});


  // const styles=StyleSheet.create({
  //   text: {
  //     fontFamily: 'Helvetica',
  //     fontSize: 30,
  //   },
  // }),

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


  // return (
  //   <View style={styles.container}>
  //     <View style={styles.top} />
  //     <View style={styles.middle}>
  //     <Text style={styles.textStyle}>This is SiRadio!</Text>
  //     <MyButton details="Cool button"></MyButton>
  //     <Button title='Home Screen' color="red">

  //     </Button>
  //     <Text> HomeScreen page</Text>
  //     <Button
  //     title="Go to About us"
  //     onPress={() =>
  //       navigation.navigate('About Us', {name: 'Sirad'})
  //     }
  //   />
  //     </View>
  //     <View style={styles.bottom} />
      
    
  //     <StatusBar style="auto" />
  //     </View>

  // );
// }

// class HomeScreen extends React.Component {

//   constructor(){
//     super()
//     this.state = {value:0}
//     }

//     update = () => {
//         this.setState({value: this.state.value + 1})
//       }

//     componentDidUpdate(){
//         console.log(`the new value is: ${this.state.value}`)
//       }

//     componentDidMount(){
//     console.log('About us screen has successfully mounted')
//     }

//     render(){
//       return(
//         <View>
//           <Text color={"green300"}>Demo</Text>
//         // <View style={styles.container}>
//         // <View style={styles.top} />
//         // <View style={styles.middle}>
//         // <Text style={styles.textStyle}>This is SiRadio!</Text>
//         <MyButton details="Cool button"></MyButton>
//         <Button title='Home Screen' color="red" onPress={this.update}></Button>
//         <Button
//         title="Go to About us"
//         onPress={() =>
//           this.props.navigation.navigate('About Us', {name: 'Sirad'})
//         }
//       />
//         </View>
//         <View style={styles.bottom} />
        
      
//         <StatusBar style="auto" />
//         </View>
//       );
//     }
//   }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     // padding: 20,
//     // marging: 10,
//     // flexDirection: "column",
//   },

//   top: {
//     flex: 1,
//     backgroundColor: 'grey',
//     // borderWidth: 1,
//     // borderTopLeftRadius: 5,
//     // borderTopRightRadius: 5,
//   },

//   middle: {
//     flex: 1,
//     backgroundColor: 'beige',
//     // borderWidth: 2,
//      alignItems: 'center',
//     justifyContent: 'center',
//   },

//   bottom: {
//     flex: 1,
//     backgroundColor: 'pink',
//     // borderWidth: 1,
//     // borderBottomLeftRadius: 5,
//     // borderBottomRightRadius: 5,
//   },

//   textStyle: {
//     color: '#196F3D',
//     fontSize: 30,
//     fontWeight: 'normal',
//     letterSpacing: 0.25,
//     textDecorationLine: 'none',
//   },
// });

// export default HomeScreen;