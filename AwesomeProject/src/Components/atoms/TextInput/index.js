import React from 'react'
import { StyleSheet, Text, View, TextInput as Input } from 'react-native'

const TextInput = () => {
    return (
        <View>
    <Text style={styles.labelInput}>Name</Text>
    <Input style={styles.input}placeholder="Masukan nama lengkap anda"/>
    <Text style={styles.labelInput}>Username</Text>
    <Input style={styles.input}placeholder="Masukan Username anda"/>
    <Text style={styles.labelInput}>Email</Text>
    <Input style={styles.input}placeholder="Masukan email anda"/>
    <Text style={styles.labelInput}>Address</Text>
    <Input style={styles.input}placeholder="Masukan alamat anda"/>  
    <Text style={styles.labelInput}>Phone Number</Text>
    <Input style={styles.input}placeholder="Masukan nomor telepon anda"/>  
        </View>
    )
}

export default TextInput;

const styles = StyleSheet.create({
    labelInput: {
        fontSize: 14,
        marginTop: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#DED5D5',
        borderRadius: 10,
        paddingLeft: 15,
        paddingVertical: 15,
        marginTop: 5,
    },
})
