import React, {useState,useEffect} from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import MapView, { Marker,PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'


const Location = (navigation) => {

  const [lats,setLats] =useState (23.456778)
  const [longs,setLongs] = useState(84.54768)
  
  Geolocation.getCurrentPosition(
    (position) => {
    // console.log(position);
    setLats(position.coords.latitude)
    setLongs(position.coords.longitude)
    },
    (error) => {
    console.log(error.code, error.message);
    },
    { enableHighAccuracy:
    true, timeout:
    15000,maximumAge:
    10000 }
    );

  return(
   
    <View  style={{flex:1,width:'100%',height:'100%'}}>

       <MapView
          style={{flex:1,width:'100%',height:'100%'}}
          provider = {PROVIDER_GOOGLE}
          showsUserLocation={true}
          mapType= 'hybrid'
          >
            
          <Marker
            // key={index}
            coordinate={{latitude : lats , longitude : longs}}
            title={'THIS is ME'}
            description={'NOT a Desc'}
          />

          </MapView>
          {/* <Button
          onPress={LOCATE}></Button> */}

    </View>
  )  
}                                                                               

export default Location;