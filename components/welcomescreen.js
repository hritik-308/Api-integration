import React, {useState} from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List from '../components/List';

export default function Home() {

  // const[Home, setHome] = useState([
  //   {text: 'Screen', key: '1'},
  //   {text: 'Mouse', key: '2'},
  //   {text: 'Keyboard', key: '3'},
  //   {text: 'CPU', key: '4'},
  // ])



  return (
    <View style ={styles.container}
    >
      
      
      {/* <View style={styles.List}>

        
        <FlatList
          data={Home}
          renderItem={({item}) => (
            <TouchableOpacity >
            <Text style = {styles.item}>{item.text}</Text>
            </TouchableOpacity> 
          )}
        />
        <createAppContainer/>
          
      </View>
      <Button /> */}
      <List />
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex : 1,
    backgroundColor:'#fff'
  },
  List:{
     padding:16,
     marginTop:10,
  },
  item:{
    padding:15,
    marginTop:15,
    borderWidth:1,
    borderColor:'black',
    borderStyle:'solid',
    borderRadius:3,
  },
})

