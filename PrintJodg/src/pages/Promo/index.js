import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Gambar from '../../assets/ilustrations/promo.svg';
import Gambar2 from '../../assets/ilustrations/gambar2.svg';


export default class App extends Component {
  render() {
    return (
     
        <View style={styles.row}>
        <View style={styles.inputWrap}>
          <Text style={styles.label1}>Promo Ngeprint</Text>
          <Gambar />
        </View>

        <View style={styles.inputWrap2}>
          <Text style={styles.label2}>Selengkapnya</Text>
          <TouchableOpacity />
          <Gambar2 />
        </View>
      </View>
   
      
    );
  }
}

const styles = StyleSheet.create({
  row: {
    marginTop: 8,
    flex: 1,
    flexDirection: "row",
    backgroundColor: 'white'
    
  },
  inputWrap: {
      paddingLeft:32,
    flex: 1,
    marginBottom: 5,
  },
  inputWrap2: {
    paddingLeft: 90,
  flex: 1,
  marginBottom: 5,
},
label1: {
    padding: 10,
    backgroundColor: 'white',
    paddingLeft: 0,
    fontSize: 14,
  },
  label2: {
  padding: 10,
  backgroundColor: 'white',
  paddingLeft: 0,
  fontSize: 14,
  color: '#4A48B6',
  },
});