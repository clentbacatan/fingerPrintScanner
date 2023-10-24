import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react'
import {StyleSheet} from 'react-native'
import * as LocalAuthentication from 'expo-local-authentication';


import ReactNativeBiometrics from 'react-native-biometrics';


//components
import HomePage from './src/homePage';
import PinLock from './src/pinCode/pinLock';
import LogIn from './src/logIn';
import handleBioMetricAuth from './src/biometrics/handleBiometric';

 const App = (): JSX.Element => {

    const Stack = createNativeStackNavigator()

  // const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  // //for face detection or fingerprint scan
  // useEffect(() => {
  //   (async () => {
  //     const compatible = await LocalAuthentication.hasHardwareAsync(); //determines if the figerprint scanner is available to device
  //     setIsBiometricSupported(compatible);
  //   })();
  // })

      return (
       
       <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
        </Stack.Navigator>
        <StatusBar style="auto" />
       </NavigationContainer>
        
      );
  }


export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: 'orange',
    height: 60,
    marginTop: 200,
    width: 250,
    marginLeft: 50
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  pinLock: {
    marginTop: 200,
    width: 250,
    marginBottom: 100
  }

});


