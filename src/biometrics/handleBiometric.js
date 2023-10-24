import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Button, SafeAreaView, Alert, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import * as LocalAuthentication from 'expo-local-authentication';






const fallBackToDefaultAuth = () => {
    console.log('fall back to password authentication');
  }

  const alertComponent = (title, message, buttonText, buttonFunction) => {
    return Alert.alert(title, message, [
      {
      text: buttonText,
      onPress: buttonFunction
      }
    ])
  };

  const twoButtonAlert = () => {
    Alert.alert('Welcome to Filipizen', [
      {
        text: 'Back',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      },
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed')
      }
    ])
}


export const handleBioMetricAuth =  async () => {
      
    //check if hardware supports biometric
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

    //fallback to default authentication method (password) if biometric is not available
    if(!isBiometricAvailable) {
      return alertComponent (
        'Please Enter your pin',
        'Biometric is not supported to this device',
        'Ok',
        () => fallBackToDefaultAuth
      );
    }
    
    //check biometric types available ( fingerprint, facial recognition, iris recognition)
    let supportedBiometrics; 
    if (isBiometricAvailable) {
      supportedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync();
    }
    

    //check biometrics are save locally in user's device
     const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if(!savedBiometrics) {
      return alertComponent(
        'No record found for this biometric',
        'Please login with pin number',
        'Ok',
        () => fallBackToDefaultAuth
      )
    }
     
    // authenticate with biometric
    const biometricAuth =  await LocalAuthentication.authenticateAsync({
      promptMessage: 'Login with Biometrics',
      cancelLabel: 'cancel',
      disableDeviceFallback: true,
    });

    // Log the user in on success

    if(biometricAuth) {
      twoButtonAlert();     
    }

      console.log({isBiometricAvailable});
      console.log(supportedBiometrics);
      console.log({savedBiometrics});
      console.log({biometricAuth});

    }
    

export default handleBioMetricAuth;