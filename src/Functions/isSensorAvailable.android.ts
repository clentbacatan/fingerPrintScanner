
import { NativeModules } from "react-native";
import errorHandling from "./errorHandling";


const {ReactNativeFingerprintScanner} = NativeModules;

export default () => {
    return new Promise((resolve, reject) => {
        ReactNativeFingerprintScanner.isSensorAvailable()
        .then((biometryType) => resolve(biometryType))
        .catch((error) => reject(errorHandling(error.code, error.message)))
    })
}