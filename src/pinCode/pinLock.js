import React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";


//import PINCode from '@haskkor/react-native-pincode'; 

class PinLock extends React.Component {
    constructor() {
        super();
        this.state = {
          showPinLock: false,
          PINCodeStatus: "choose",
        };   
    }
    
    // class methods
    _showChoosePinLock = () => {
        this.setState({PINCodeStatus: 'choose', showPinLock: true})
    };
    
    _showEnterPinLock = () => {};
    _clearPin = () => {};

    render() {
        
        return(
            <View style={styles.container}>
                {!this.state.showPinLock && (
                <View>
                    <View style={styles.button}>
                        <Text>Click to set your pin</Text>
                        <Button
                        onPress={() => _showChoosePinLock() }
                        title='Set up your pin'/>
                    </View>
                </View>
                )}
                {this.state.showPinLock && (
                    <PINCode 
                    status={this.state.PINCodeStatus} 
                    touchIDDisabled={true} 
                  /> 
                )} 
            </View>
        )
    }

}


const styles = StyleSheet.create({

    button: {
        marginBottom: 5,
        padding: 10,
        height: 60,
        marginTop: 200
      },
      
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      }
})


export default PinLock;