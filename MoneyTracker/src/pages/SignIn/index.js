import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Header, TextInput } from '../../components';

const SignIn = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Sign In" onBack={() => {}}/>
            <View style={styles.contentWrapper}>
            <TextInput title="Email Address" placeholder="Type your email address"/>
            <Gap height={16} />
            <TextInput title="Password" placeholder="Type your password"/>
            <Gap height={20} />
            <Button title="Sign In"/>
            <Gap height={16} />
            <Button 
            title="Create New Account" 
            color="#8d92a3" textColor="white" 
            onPress={()=>navigation.navigate('SignUp')}
            />
            
            </View>
        </View>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    contentWrapper: {
        flex: 1,
        marginTop: 24,
        backgroundColor: 'yellow',
        paddingHorizontal: 24,
        paddingTop: 26,
    },
});
