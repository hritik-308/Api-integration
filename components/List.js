import React,{useState} from "react";
import { Button,PermissionsAndroid,  SafeAreaView, StatusBar, StyleSheet, Text, View,TouchableOpacity, Image} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import {launchCamera, launchImageLibrary }from 'react-native-image-picker'; 





const List = () => {
  const [imageUri, setimageUri] = useState('https://reactjs.org/logo-og.png');
  let options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  
  
  
  const requestCameraPermission = async () => {
     try{
      await launchCamera(options, (response) =>
      {
        console.log('Response=', response)
        
      })
      
  
    }catch(err){
      console.warn(err);
    }
      
  
  };
  
  const gallery = async () => {
    try{
     await launchImageLibrary(options, (response) =>
     {
       console.log('Response=', response);
  
       const source =response.assets[0].uri;
       setimageUri(source);
       
     })
     
  
   }catch(err){
     console.warn(err);
   }
     
  
  };
  return(
  
  <View >
  <Image
        source={{uri:imageUri}}
        style={{
          margin:100,
          justifyContent:'center',
          alignItems:'center',
          height:200,
          width:200,
          borderWidth:1,
          borderColor:'black',
          borderRadius:200
        }}
      />

<View style={styles.glry}>
    {/* <Text style={styles.item}>Camera Permission</Text> */}
    <Button title="OpenCamera" onPress={requestCameraPermission}/>
    </View>
    <View style={styles.mod}>
    <Button title="OpenGallery" onPress={gallery} />
    </View>
    </View>

 
  
  ) };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: "center",
    alignItems:'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ecf0f1",
    padding: 8
    
  },
  // item: {
  //   margin: 24,
  //   fontSize: 18,
  //   fontWeight: "bold",
  //   textAlign: "center",
  //   justifyContent:'center'
  // }
  glry:{
    color:'dodgerblue',
    margin:10,
    flexDirection:'row',
    justifyContent:'space-around',
    
  },
  mod:{
    color:'green',
    margin:20,
    flexDirection:'row',
    justifyContent:'space-around'
   

  }
});

export default List;


