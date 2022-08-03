import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";


import LoginScreen from "../components/loginscreen";
import ToDo from "../components/todoitem";
import Home from "../components/welcomescreen";
import ProfileScreen from '../App'
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      {/* <Drawer.Screen name="Home" component={ToDo} /> */}
      <Drawer.Screen name="ProfileScreen" component={Home} 
      />
      
      {/* <Drawer.Screen name="Logins" component={LoginScreen} /> */}
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;