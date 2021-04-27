import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, Header, Gap, TextInput} from '../../components';

const SignUp = ({navigation}) => {
    return (
        <View style={styles.page}>
           <Header title="Sign Up" onBack={() => navigation.goBack()} />    
            <View style={styles.contentWrapper}>
                <View style={styles.avatarWrapper}>
                <View style={styles.border}>
                    <View style={styles.addPhoto}>
                <Text style={styles.textAddPhoto}>Add Photo</Text>
              </View>
            </View>
            </View>
              <TextInput title="Full Name" placeholder="Type your full name" />
                <Gap height={16} />
                <TextInput 
                    title="Email Address" 
                    placeholder="Type your email address" />
                <Gap height={16} />
                <TextInput title="Password" placeholder="Type your password" />
                <Gap height={24} />
                <Button title="Continue" />
            </View>
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    contentWrapper: {
        flex: 1,
        marginTop: 24,
        backgroundColor: 'white',
        paddingHorizontal: 24,
    },
    addPhoto: {
        width: 90,
        backgroundColor: '#f0f0f0',
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 90, 
    },
    textAddPhoto: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
    },
    border: {
        width: 110,
        height: 110,
        borderRadius: 110,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        border: 'dashed',
    },
    avatarWrapper: {
        alignItems: 'center',
        marginTop: 26,
        marginBottom: 16,
    },
});
