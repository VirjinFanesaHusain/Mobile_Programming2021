import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Buttom = (title4) => {
    return (
        <View>
            <TouchableOpacity>
            <Text style={styles.format}>{title4}</Text>
            </TouchableOpacity>
          
        </View>
    )
}

export default Buttom;

const styles = StyleSheet.create({
    format: {
        marginTop: 8,
        fontSize: 14,
        fontFamily: 'Roboto-Bold',
        backgroundColor: 'white',
        paddingLeft: 32,
        paddingVertical: 15,
        color: '#4A48B6',
       paddingLeft: 135,
    },
})
