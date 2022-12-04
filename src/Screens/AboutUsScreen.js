import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MyButton from '../Components/MyButton';

// export default function AboutUsScreen({navigation, route}) {
//     return (
//         <View style={styles.container}>
//           <View style={styles.top} />
//           <View style={styles.middle}>
//           <Text style={styles.textStyle}>This is SiRadio!</Text>
//           <MyButton details="Cool button"></MyButton>
//           <Button title="About Us" color="red">

//           </Button>
//           <Text> About Us page</Text>
//           <Text>Welcome {route.params.name}</Text>
//       <Button
//       title="Go to Home screen"
//       onPress={() =>
//         navigation.navigate('Home')
//       }
//     />
//           </View>
//           <View style={styles.bottom} />
          
        
//           <StatusBar style="auto" />
//           </View>
    
//       );
// }


class AboutUsScreen extends React.Component {

    constructor(){
    super()
    this.state = {value:0, data: []}
    }

    update = () => {
        this.setState({value: this.state.value + 1})
      }

      fetchData = async () => {
        fetch('https://aztro.sameerkumar.website/?sign=aries&day=today', {
          method: 'POST',
          headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
          }
        }).then(response => { return response.json() }).then( d => { this.setState({ data: d}) } ).catch(err => {console.log(`ERROR: ${err}`)})
      }

    componentDidUpdate(){
        console.log(`the new value is: ${this.state.value}`)
      }

    componentDidMount(){
    console.log('About us screen has successfully mounted')
    }


    render(){
    return(
        <View style={styles.container}>
        <View style={styles.top} />
        <View style={styles.middle}>
        <Text style={styles.textStyle}>This is SiRadio!</Text>
        <MyButton details="Cool button"></MyButton>
        <Button title="About Us" color="red" onPress={this.update}></Button>
        {/* <Text>Welcome {route.params.name}</Text> */}
    <Button
    title="Go to Home screen"
    onPress={() =>
      this.props.navigation.navigate('Home')
    }
  />
        </View>
        <View style={styles.bottom}>
        <Button title="Press me to get the data!!" color='blue' onPress={this.fetchData}></Button>
      <Text>Description: {this.state.data.description}</Text>
      <Text>Mood: {this.state.data.mood}</Text>
        </View>
        
      
        <StatusBar style="auto" />
        </View>
    )}

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
      // padding: 20,
      // marging: 10,
      // flexDirection: "column",
    },
  
    top: {
      flex: 1,
      backgroundColor: 'grey',
      // borderWidth: 1,
      // borderTopLeftRadius: 5,
      // borderTopRightRadius: 5,
    },
  
    middle: {
      flex: 1,
      backgroundColor: 'beige',
      // borderWidth: 2,
       alignItems: 'center',
      justifyContent: 'center',
    },
  
    bottom: {
      flex: 1,
      backgroundColor: 'pink',
      // borderWidth: 1,
      // borderBottomLeftRadius: 5,
      // borderBottomRightRadius: 5,
    },
  
    textStyle: {
      color: '#196F3D',
      fontSize: 30,
      fontWeight: 'normal',
      letterSpacing: 0.25,
      textDecorationLine: 'none',
    },
  });
  
  export default AboutUsScreen;