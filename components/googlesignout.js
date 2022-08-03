import { View, Text, Button,Image, Alert } from 'react-native'
import React ,{useState} from 'react'

import LoginScreen from './loginscreen';
//Goofgle Sign in packageive-google-signin/google-signin';
import { GoogleSignin, GoogleSigninButton, statusCodes,} from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const UserInfo = () => {

  const navigation = useNavigation();

  const [userImg , setUserImg] = useState()
  const [userName , setUserName] = useState()
  const [userEmail , setUserEmail] = useState()
  const [userID , setUserID] = useState()

    const getCurrentUser = async () => {
        const currentUser = await (GoogleSignin.getCurrentUser());
        setUserName(currentUser.user.name);
        setUserImg(currentUser.user.photo);
        setUserEmail(currentUser.user.email);
        setUserID(currentUser.user.id);
      };
      
      const signOut = async () => {
        try {
          await GoogleSignin.signOut();
                setUserName('Logged Out');
                setUserImg('Logged Out');
                setUserEmail('Logged Out');
                setUserID('Logged Out');

                Alert.alert(
                    " ",
                    "You're Succesfully Logged Out",
                    [
                      { text: "GO TO Login Page", onPress: () => navigation.navigate('LoginScreen') }
                    ]
                  );
        } catch (error) {
          console.error(error);
        }
      };
  return (
    <View>

        <Image
      source = {{uri:userImg}}
      style={{
            margin:50,
            justifyContent:'center',
            alignItems:'center',
            height:300,
            width:300,
            borderWidth:1,
            borderColor:'black',
            borderRadius:300
          }}
    />
   
        <Text>  User ID is :{userID}</Text>
        <Text>  User name is : {userName}</Text>
        <Text>  User E-mail ID is : {userEmail}</Text>

    <View
      style={{margin:10}}
    />

    <Button
      title='Get User Info'
      onPress={getCurrentUser} 
    />
    <View
      style={{margin:10}}
    />
        <Button
        title='SignOut'
          onPress={signOut}
        />

    </View>
  )
}

export default UserInfo