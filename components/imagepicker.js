import React from 'react';
import {View,Button,Text} from 'react-native';


import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const takePhotoFromCamera=()=>{
    ImagePicker.openCamera({
        width:300,
        height:400,
        cropping:true,


    }).then(image =>{
        console.log(image);
    });

}
const choosePhotoFromLibrary=()=>{
    ImagePicker.openPicker({
        width:300,
        height:400,
        cropping:true
    }).then(image =>{
        console.log(image);
    })
}
return (
    <View style={justifyContent='center'}>
        <Button title={'Open Camera'} onPress={()=>{
            takePhotoFromCamera()
        }}/>
        <View style={justifyContent='center'}>
        <Button title={'Open Gallery'} onPress={()=>{
            choosePhotoFromLibrary()
        }}/>
        </View>
    </View>
)