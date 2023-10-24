
// this function handles the error if the finger print scanner functionality is not supported on the device the app is running on.


import { Platform } from 'react-native'; //detects the Platform the app is running on

export default() => {
    return new Promise((_, reject) => {
        reject(new Error(`react-native-fingerprint-scanner is not available for ${Platform.OS}`))
      });
}