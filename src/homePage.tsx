

import {View, Text, StyleSheet} from 'react-native'


import React from 'react'

const HomePage = (): JSX.Element => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>You are now logged in!</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
      fontSize: 16
    }
})

export default HomePage;
