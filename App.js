import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './components/welcomescreen';
import {useNavigation} from '@react-navigation/native';
import Content from './components/homepagecontent';
import Location from './components/maps';
import LoginScreen from './components/loginscreen';
import UserInfo from './components/googlesignout';
import ToDo from './components/todoitem';
import 'react-native-gesture-handler';
import DrawerNew from './components/drawer';
import PhoneSign from './components/phonesign';
import OTPScreen from './components/otp';


function CustomHeader({title, isHome, navigation}) {
  return (
    <View style={{flexDirection: 'row', height: 1}}>
     
      <View Style={{flex: 1.5, justifyContent: 'center'}}>
      
        <Text style={{textAlign: 'center', justifyContent: 'center'}}></Text>
      </View>
      <View style={{flex: 1}}></View>
      
    </View>
  );
}

function ProfileScreen({navigation}) {
  return (
    
    <SafeAreaView style={{flex:1.5}}>
      
      <CustomHeader title="Profiles" isHome={true} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Profiles!</Text>
        <Home />
        <TouchableOpacity
          style={{
            marginBottom: 40,
            borderColor: 'black',
            borderWidth: 1,
            padding: 10,
          }}
          onPress={() => navigation.navigate('Login Detail')}>
          <Text style={{color: 'red'}}>Go Login Detail</Text>
        </TouchableOpacity>
      </View>
     
    </SafeAreaView>
  );
        
}
function LoginScreenDetail({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Login Detail" navigation={navigation} />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
       
        <LoginScreen />
      </View>
    </SafeAreaView>
  );
};

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Home" isHome={true} />
      <View style={{flex: 1}}>
        
        <Content />
      </View>
    </SafeAreaView>
  );
}

function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
    
    <SafeAreaView style={{flex: 1}}>
     
      
      <CustomHeader title="Setting" isHome={true} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Setting!</Text>

        {/* <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('SettingDetail')}>
          <Text
            style={{
              borderRadius: 10,
              color: 'red',
              borderWidth: 2,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 10,
              fontStyle: 'italic',
            }}>
            Locate on Map
          </Text>
        </TouchableOpacity> */}
      </View>
      <DrawerNew/>
    </SafeAreaView>
    
    </View>
  );
}

// function SettingsScreenDetail({navigation}) {
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <CustomHeader title="Setting Detail" navigation={navigation} />
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text>Setting Detail!</Text>
        
//       </View>
//     </SafeAreaView>
//   );
// }

function NotificationsScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Notifications" isHome={true} />
      <View style={{flex:1}}>        
      </View>
      <View style={{flex:1,flexDirection:'column',marginBottom:300}}>
      
      </View>
      
    </SafeAreaView>
  );
}

function MapScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Map" isHome={true} />
      <View style={{flex: 1}}>
      <Location />
        
      </View>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();


const navOptionHandler = () => ({
  headerShown: false,
});
const StackProfile = createNativeStackNavigator();

function ProfileStack() {
  return (
    <StackProfile.Navigator initalRouteName="Profiles">
      <StackProfile.Screen
        name="Profiles"
        component={ProfileScreen}
        options={navOptionHandler}
      />
      <StackProfile.Screen
        name="Login Detail"
        component={LoginScreenDetail}
        options={navOptionHandler}
      />
      <StackProfile.Screen
        name="UserInfo"
        component={UserInfo}
        options={navOptionHandler}
      />
       <StackProfile.Screen
        name="ToDo"
        component={ToDo}
        options={navOptionHandler}
      />
      <StackProfile.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={navOptionHandler}
      />
      <StackProfile.Screen
        name="Sign_In_With_Phone_Number"
        component={PhoneSign}
        options={navOptionHandler}
      />
      <StackProfile.Screen
        name="OTP_SCREEN"
        component={OTPScreen}
        options={navOptionHandler}
      />
    </StackProfile.Navigator>
  );
}
const StackHome = createNativeStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator initalRouteName="Home">
      <StackHome.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={navOptionHandler}
      />
    </StackHome.Navigator>
  );
}
const StackSetting = createNativeStackNavigator();

function SettingStack() {
  return (
    <StackSetting.Navigator initalRouteName="Setting">
      <StackSetting.Screen
        name="Setting"
        component={SettingsScreen}
        options={navOptionHandler}
      />
      {/* <StackSetting.Screen
        name="SettingDetail"
        component={SettingsScreenDetail}
        options={navOptionHandler}
      /> */}
     
    </StackSetting.Navigator>
  );
}
const StackMap = createNativeStackNavigator();
function MapStack() {
  return (
    <StackMap.Navigator initalRouteName="Map">
      <StackMap.Screen
        name="MapScreen"
        component={MapScreen}
        options={navOptionHandler}
      />
    </StackMap.Navigator>
  );
}

const StackNotification = createNativeStackNavigator();
function NotificationsStack() {
  return (
    <StackNotification.Navigator initalRouteName="Notification">
      <StackNotification.Screen
        name="Notification"
        component={NotificationsScreen}
        options={navOptionHandler}
      />
    </StackNotification.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('./components/downloadedimages/home.png')
                : require('./components/downloadedimages/house-black-silhouette-without-door.png');
            } else if (route.name === 'Settings') {
              iconName = focused
                ? require('./components/downloadedimages/setting.png')
                : require('./components/downloadedimages/setting_black.png');
            } else if (route.name === 'Profile') {
              iconName = focused
                ? require('./components/downloadedimages/user.png')
                : require('./components/downloadedimages/profile-user.png');
            } else if (route.name === 'Map') {
               iconName = focused
                 ? require('./components/downloadedimages/Mapw.png')
                 : require('./components/downloadedimages/Mapbk.png');

            }  else if (route.name === 'Notifications') {
              iconName = focused
                ? require('./components/downloadedimages/notificationw.png')
                : require('./components/downloadedimages/notificationbk.png');

           }    
            
            return (
              <Image
                source={iconName}
                style={{width: 20, height: 20}}
                resizeMode="contain"
              />
            );
          },
          tabBarActiveTintColor: 'dodgerblue',
          tabBarInactiveTintColor: 'black',
        })}>
        <Tab.Screen name="Profile" component={ProfileStack} />
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Map" component={MapStack} />
        <Tab.Screen name="Notifications" component={NotificationsStack} />
        <Tab.Screen name="Settings" component={SettingStack} />
        
      </Tab.Navigator>
      
      
    </NavigationContainer>
  );
}


