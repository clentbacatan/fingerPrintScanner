
import { NativeModules, Platform } from 'react-native';
const { RNKeychainManager } = NativeModules;

export const SECURITY_LEVEL = Object.freeze({
  ANY: RNKeychainManager.SECURITY_LEVEL_ANY,
  SECURE_SOFTWARE: RNKeychainManager.SECURITY_LEVEL_SECURE_SOFTWARE,
  SECURE_HARDWARE: RNKeychainManager.SECURITY_LEVEL_SECURE_HARDWARE,
});


export default {
    setGenericPassword: jest.fn(),
    getGenericPassword: jest.fn(),
    resetGenericPassword: jest.fn()
  }