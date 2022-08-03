import React,{useState} from "react";
import { StyleSheet,Text,View,Button,TextInput, Alert, TouchableWithoutFeedback,Keyboard, ImageBackground,Image } from "react-native";
import Header from "../components/header";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { black } from "react-native-paper/lib/typescript/styles/colors";
// import { useNavigation } from '@react-navigation/native';
import GoogleSign from "./googlesignin";
import OnboardingScreen from "./onboardingscreen";
import { useNavigation } from "@react-navigation/native";

import PhoneSign from "./phonesign";




export default function LoginScreen() {

  const navigation = useNavigation();

  return(
   <View  >
     
    <View style={{color:'black',margin:0}}>
    <Header />
    </View>
     
  <TouchableWithoutFeedback onPress={() => {
    Keyboard.dismiss();
  }}>
       
     <ImageBackground style={styles.container}>
          {/* <Image style={{width:20,height:20}} source={require('/home/hritikshukla/awesomeproject/components/downloadedimages/rnimage.png')}/>  */}

          <Text style={styles.TextN}>Enter email:</Text>
          <TextInput 
          style={styles.input}
          placeholder='e.g abc@xyz.com'
          />
  
          {/* <Text style={styles.TextM}>Enter Mobile Number:</Text>
          <TextInput 
          style={styles.input}
          placeholder='e.g 9838XXXXXX'
          keyboardType = 'numeric'
          maxLength={10}

          /> */}
          

          <Text style={styles.TextP}>Enter Password:</Text>
          <TextInput 
          style={styles.input}
          placeholder='e.g Hritik@123'
          keyboardType = 'visible-password'
          />
  
         <Button
          title="Sign IN"
          color="dodgerblue"
          onPress={ () => Alert.alert("Welcome","You Have Successfully Logged in",
          [{text:"Continue", onPress : () => navigation.navigate('ToDo')}]) 
          }
        />
        <GoogleSign/>
        <Button
          title="Sign_In_With_Phone_Number"
          color="dodgerblue"
          onPress={ () => Alert.alert("Welcome","You Have Successfully Logged in",
          [{text:"Continue", onPress : () => navigation.navigate('Sign_In_With_Phone_Number')}]) 
          }
        />
       </ImageBackground>
     </TouchableWithoutFeedback>
    
      </View>
  );
};
  
const styles=StyleSheet.create({
  container:{
    
    backgroundcolor:'white',
    alignItems:'center',
    justifyContent:'center',
    margin:5

  },
  TextN:{
    fontSize:15,
    fontWeight:"bold",
    color:'dodgerblue',
    margin:5,
    paddingLeft:1

  },
  TextM:{
    fontWeight:"bold",
    marginRight:20,
    marginTop:10,
    color:'dodgerblue',
   
  },
  TextP:{
    fontWeight:"bold",
    marginRight:20,
    marginTop:10,
    color:'dodgerblue',
    
  },
  input:{
    borderWidth:3,
    borderColor:'dodgerblue',
    padding:10,
    margin:10,
    width:300,

  },
   
});
