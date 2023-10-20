import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Button } from 'react-native';
import {useState, useEffect} from 'react'

import ReactNativeBiometrics from 'react-native-biometrics';



export default function App() {

  const [displayMessage, setDisplayMessage] = useState('')


  return (

    <View style={styles.container}>
      <View style={styles.firstNameParent}>
        <Text>First Name</Text>
        <TextInput
        style={{
          height: 40,
          width: 200,
          borderColor: '#20232a',
          borderRadius: 6,
          borderWidth: 2
        }} defaultValue=""/>
      </View>

      <View>
        <Text>Last Name</Text>
        <TextInput
        style={{
          height: 40,
          width: 200,
          borderColor: '#20232a',
          borderRadius: 6,
          borderWidth: 2
        }} defaultValue=""/>
      </View>

      <View>

      <TouchableHighlight
          style={{
            height: 60,
          }}>
      </TouchableHighlight>
      <Button onPress={isBioSupport}>Log In Herej</Button>

        <Text>
          {displayMessage}
        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstNameParent : {
    marginBottom: 15
  }
});


