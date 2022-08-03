import * as React from 'react';
import { Text, View,Dimensions} from 'react-native';
import { createDrawerNavigator } 
         from '@react-navigation/drawer';
import AboutScreen from '../Navigation/Screens/AboutScreens';  

import Content from './homepagecontent';

const Drawer = createDrawerNavigator();
  
export default function DrawerNew() {
  return (
    <View style={{flex:1,marginBottom:300}}>
      <Drawer.Navigator
       initialRouteName="HomeScreen"
       openByDefault
      >
         <Drawer.Screen name="HomeScreen" component={Content} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
      </View>
  );
}