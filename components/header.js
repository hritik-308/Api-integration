import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
    const navigation=useNavigation();
 return (
     <View style={styles.header}>
         <Text style={styles.title}>Login</Text>
     </View>
 )   
}

const styles=StyleSheet.create({
    header:{
       height:60,
       paddingTop:20,
        
    },
    title:{
        textAlign:'center',
        color:'dodgerblue',
        fontSize:30,
        fontWeight:'bold',
    }


});