import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Header } from '../../components'
import {FormatPrint, Promo, TentangKami} from '../../pages';

const HomeUser = (navigation) => {
    return (
        <View style={styles.contentWrapper}>
           <Header 
           title="Hai, Michelle" 
           title2="Cetakannya dikirim kemana?" 
           title3="Keterangan"
            />
            <Promo />
            <FormatPrint />
            <TentangKami />
        </View>
    )
}

export default HomeUser;

const styles = StyleSheet.create({
    contentWrapper: {
        flex: 1,
    },
    text: {
        fontSize: 16,
        fontFamily: 'Roboto-Thin',
    },
    text2: {
        fontSize: 16,
        fontFamily: 'Roboto-Medium',
    },
    
});