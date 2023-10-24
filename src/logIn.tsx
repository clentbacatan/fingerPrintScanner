


import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


//components
import SignIn from './signIn';
import SignUp from './signUp';
import { pinKey } from './constants/constant';

const LogIn = ({ navigation }: any): JSX.Element => {

    const [isSignUp, setIsSignUp] = useState<boolean>(true);


    //retrieves the stored data
    const retrieveData = async () => {

        //clears the storage
        useEffect(() => {
            AsyncStorage.clear();
            retrieveData();
        }, [])

        try{
            const values = AsyncStorage.getItem(pinKey);
             if(values !== null) { 
                console.log(values);
                setIsSignUp(false);  
            }   
        } catch (error) {
            console.log(JSON.stringify(error));
        }
    }

  return (
    <>
        {isSignUp ? <SignUp navigation={navigation} />
        :
        <SignIn navigation={navigation} />}
    </>
  )
}

export default LogIn