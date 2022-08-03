import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

import { Text, View,SafeAreaView,Image,TouchableOpacity,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const OnboardingScreen = ({navigation})=>{
    return(
        <Onboarding
        onSkip={() => navigation.navigate('HomeScreen')}
        onDone={() => navigation.navigate('HomeScreen')}
         pages={[
           {
             backgroundColor: '#fff',
             image: <Image source={require('/home/hritikshukla/awesomeproject/components/downloadedimages/rnimage.png')} />,
             title: 'Onboarding 1',
             subtitle: 'Done with React Native Onboarding Swiper',
            },

            {
                backgroundColor: '#fff',
                image: <Image source={require('/home/hritikshukla/awesomeproject/components/downloadedimages/bluebkgd.png')} />,
                title: 'Onboarding 2',
                subtitle: 'Done with React Native Onboarding Swiper',
            },

            {
                backgroundColor: '#fff',
                image: <Image  source={require('/home/hritikshukla/awesomeproject/components/downloadedimages/sinchan.jpg')} />,
                title: 'Onboarding 2',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
    
         ]}
        />
        
    )
}
export default OnboardingScreen;