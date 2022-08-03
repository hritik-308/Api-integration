// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import ToDo from "../components/todoitem";
// import OnboardingScreen from "../components/onboardingscreen";
// import LoginScreen from "../components/loginscreen";
// import Header from "../components/header";


// const Stack = createStackNavigator();

// const screenOptionStyle = {
//   headerStyle: {
    
//     backgroundColor: "#9AC4F8",
//   },
//   headerTintColor: "white",
//   headerBackTitle: "Back",
// };

// const MainStackNavigator = () => {
//   return (
//     <Stack.Navigator screenOptions={screenOptionStyle}>

//       {/* <Stack.Screen name="Home" component={LoginScreen} 
//         options={{headerShown:false}}
//       />

//       <Stack.Screen name="CamGall" component={OnboardingScreen}
//        />

//        <Stack.Screen name="ToDo" component={ToDo}
       
//        /> */}

//     </Stack.Navigator>
//   );
// }

// const ContactStackNavigator = () => {
//   return (
//     <Stack.Navigator screenOptions={screenOptionStyle}>
//       <Stack.Screen name="Login" component={LoginScreen}
//       options={{headerShown:false}} />
//     </Stack.Navigator>

//   );
// }

//  const MapStackNavigator = () => {
//    return (
//      <Stack.Navigator>
//  <Stack.Screen name ="Map" component={Header} />
//      </Stack.Navigator>
//    )
//  }


// export { MainStackNavigator, ContactStackNavigator, MapStackNavigator };