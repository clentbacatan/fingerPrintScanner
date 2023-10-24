

import React from 'react'
import {View, Text, StyleSheet, Pressable} from 'react-native';





 const SignUp = ({ navigation }: any) :JSX.Element => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Sign up using a Pin Code</Text>
    </View>
  )
}


export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    text: {
        fontSize: 16,
        marginBottom: 15,
    }


})