import { StatusBar } from 'expo-status-bar';
import { Button, ProgressViewIOSComponent, StyleSheet, Text, View } from 'react-native';
import MyButton from '../Components/MyButton';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.top} />
      <View style={styles.middle}>
      <Text style={styles.textStyle}>This is SiRadio!</Text>
      <MyButton details="Cool button"></MyButton>
      <Button title="learn more" color="red"></Button>
      </View>
      <View style={styles.bottom} />
      
    
      <StatusBar style="auto" />
      </View>

  );
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
