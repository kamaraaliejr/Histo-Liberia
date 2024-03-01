import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign, MaterialCommunityIcons, MaterialIcons, Fontisto, Ionicons, FontAwesome5 } from '@expo/vector-icons';

// Import your existing screen components here
import HomeScreen from '../screens/HomeScreen';
import AddTaskScreen from '../screens/AddTaskScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpSreen';
import PasswordUpdateScreen from '../screens/PasswordUpdateScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import ProvidenceScreen from '../screens/ProvidenceScreen';
import DucorScreen from '../screens/DucorScreen';
import KpawateeScreen from '../screens/KpawateeScreen';
import MesuemScreen from '../screens/MesuemScreen';
import CavallaScreen from '../screens/CavallaScreen';
import ProfidenceScreen from '../screens/ProfidenceBaptistScreen';
import WulkiFarmScreen from '../screens/WulkiFarmScreen';
import HotelAfricaScreen from '../screens/HotelAfricaScreen';
import CommentScreen from '../screens/CommentScreen';
import PresidentScreen from '../screens/PresidentScreen';
import LibassaScreen from '../screens/LibassaScreen';
import NanaScreen from '../screens/NanaScreen';
import SilverScreen from '../screens/SilverScreen';
import TropicanaScreen from '../screens/TropicanaScreen';
import JohnScreen from '../screens/JohnScreen';
import KokonScreen from '../screens/KokonScreen';
import SunsetScreen from '../screens/SunsetScreen';
import CeceScreen from '../screens/CeceScreen';
import BernardScreen from '../screens/BernardScreen';
import RiverScreen from '../screens/RiverScreen';
import RoyalScreen from '../screens/RoyalScreen';
import BellaCasaScreen from '../screens/BellaCasaScreen';
import FarmingtonScreen from '../screens/FarmingtonScreen';
import BoulevardScreen from '../screens/BoulevardScreen';
import DeCalabashScreen from '../screens/DeCalabashScreen';
import MambaPointScreen from '../screens/MambaPointScreen';
import PalmSpringScreen from '../screens/PalmSpringScreen';
import GoldenKeyScreen from '../screens/GoldenKeyScreen';
import SinkorPalaceScreen from '../screens/SinkorPalaceScreen';
import GoldenGateScreen from '../screens/GoldenGateScreen';




const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const AddTaskStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator(); 
const CommentStack = createNativeStackNavigator(); 
const PresidentStack = createNativeStackNavigator();  
const AuthStack = createNativeStackNavigator();


const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AuthStack.Navigator initialRouteName="SignIn" headerMode="none">
                <AuthStack.Screen
                    name="SignIn"
                    component={SignInScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <AuthStack.Screen
                    name="MainTabs"
                    component={MainTabs}
                    options={{
                        headerShown: false
                    }}
                />
                <AuthStack.Screen
                    name="SignUp"
                    component={SignUpScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <AuthStack.Screen
                    name="UpdatePasword"
                    component={PasswordUpdateScreen}
                    options={{
                        headerShown: false
                    }}
                />


                    <AuthStack.Screen
                    name="Providence"
                    component={ProvidenceScreen}
                    options={{
                        headerShown: false
                    }} 
                />

                    <AuthStack.Screen
                    name="Libassa"
                    component={LibassaScreen}
                    options={{
                        headerShown: false
                    }} 
                />

                    <AuthStack.Screen
                    name="Nana"
                    component={NanaScreen}
                    options={{
                        headerShown: false
                    }} 
                />

                    <AuthStack.Screen
                    name="Silver"
                    component={SilverScreen}
                    options={{
                        headerShown: false
                    }} 
                />

                   <AuthStack.Screen
                    name="Tropicana"
                    component={TropicanaScreen}
                    options={{
                        headerShown: false
                    }} 
                />

                    <AuthStack.Screen
                    name="John"
                    component={JohnScreen}
                    options={{
                        headerShown: false
                    }} 
                />

                    <AuthStack.Screen
                    name="Kokon"
                    component={KokonScreen}
                    options={{
                        headerShown: false
                    }} 
                />

                   <AuthStack.Screen
                    name="Sunset"
                    component={SunsetScreen}
                    options={{
                        headerShown: false
                    }} 
                />

                   <AuthStack.Screen
                    name="Cece"
                    component={CeceScreen}
                    options={{
                        headerShown: false
                    }} 
                />

                   <AuthStack.Screen
                    name="Bernard"
                    component={BernardScreen}
                    options={{
                        headerShown: false
                    }} 
                />

                   <AuthStack.Screen
                    name="River"
                    component={RiverScreen}
                    options={{
                        headerShown: false
                    }} 
                />



                   <AuthStack.Screen
                    name="Ducor"
                    component={DucorScreen}
                    options={{
                        headerShown: false
                    }} 
                />

                    <AuthStack.Screen
                    name="Kpawatee"
                    component={KpawateeScreen}
                    options={{
                        headerShown: false
                    }} 
                />


                    <AuthStack.Screen
                    name="Mesuem"
                    component={MesuemScreen}
                    options={{
                        headerShown: false
                    }} 
                />


                
                    <AuthStack.Screen
                    name="Cavalla"
                    component={CavallaScreen}
                    options={{
                        headerShown: false
                    }} 
                />

                   <AuthStack.Screen
                    name="Profidence"
                    component={ProfidenceScreen}
                    options={{
                        headerShown: false
                    }} 
                />


                   <AuthStack.Screen
                    name="Wulki"
                    component={WulkiFarmScreen}
                    options={{
                        headerShown: false
                    }} 
                />


                  <AuthStack.Screen
                    name="Hotel"
                    component={HotelAfricaScreen}
                    options={{
                        headerShown: false
                    }} 
                />


                
                <AuthStack.Screen
                    name="Farmington"
                    component={FarmingtonScreen}
                    options={{
                        headerShown: false
                    }} 
                />

                  <AuthStack.Screen
                    name="Royal"
                    component={RoyalScreen}
                    options={{
                        headerShown: false
                    }} 
                />


                <AuthStack.Screen
                    name="BellaCasa"
                    component={BellaCasaScreen}
                    options={{
                        headerShown: false
                    }} 
                />

                <AuthStack.Screen
                    name="Boulevard"
                    component={BoulevardScreen}
                    options={{
                        headerShown: false
                    }} 
                />

                <AuthStack.Screen
                    name="GoldebKey"
                    component={GoldenKeyScreen}
                    options={{
                        headerShown: false
                    }} 
                />

                   <AuthStack.Screen
                    name="GoldenGate"
                    component={GoldenGateScreen}
                    options={{
                        headerShown: false
                    }} 
                />

                   <AuthStack.Screen
                    name="MambaPoint"
                    component={MambaPointScreen}
                    options={{
                        headerShown: false
                    }} 
                />

                    <AuthStack.Screen
                    name="PalmSpring"
                    component={PalmSpringScreen}
                    options={{
                        headerShown: false
                    }} 
                />

                    <AuthStack.Screen
                    name="SinkorPalace"
                    component={SinkorPalaceScreen}
                    options={{
                        headerShown: false
                    }} 
                />

                   <AuthStack.Screen
                    name="DeCalabash"
                    component={DeCalabashScreen}
                    options={{
                        headerShown: false
                    }} 
                />

            </AuthStack.Navigator>
        </NavigationContainer>


                
    );
};

const MainTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#fff',
                    //  borderTopRightRadius: 25,
                    //  borderTopLeftRadius: 25,
                    height: 90,
                },
            }}
            initialRouteName="Home"
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => <AntDesign name="home" size={30} color="black" />,
                    headerShown: false,
                }}
            />
          
            <Tab.Screen
                name="AddTaskTab"
                
                component={AddTaskStackScreen}
                options={{
                    tabBarLabel: 'Historical Sties',
                    tabBarIcon: ( ) =>
                     <Fontisto name="search" size={30} color="black" />,
                    headerShown: false,
                  

                }}
                
               
            />


                <Tab.Screen
                name="CommentScreen"
                component={CommentScreen}
                options={{
                    tabBarLabel: 'Hotels',
                    tabBarIcon: ({ color, size }) => 
                    <FontAwesome5 name="hotel" size={30} color="black" />,
                   
                }}
            />


                <Tab.Screen
                name="ProfileTab"
                component={ProfileStackScreen}
                options={{
                    tabBarLabel:'Beaches',
                    tabBarIcon: () => <MaterialCommunityIcons name="beach" size={30} color="black" />,
                    headerShown: false,
                    animation: 'none',
                }}
            />


            <Tab.Screen
                name="PresidentTab"
                component={PresidentScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: () => <AntDesign name="user" size={30} color="black" /> ,
                   
                    headerShown: false,
                    animation: 'none',
                }}
            />
        </Tab.Navigator>
    );
};

const HomeStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen
            name="HomeStack"
            component={HomeScreen}
            options={{
                title: 'Home Screen',
                animation: 'none',
                headerBackTitleVisible: true,
                headerShown: false,
            }}
        />
        <HomeStack.Screen
            name="AddTask"
            component={AddTaskScreen}
            options={{
                title: 'Historical Sites',
                animation: 'none',
                headerTitleAlign: 'center',
            }}
        />


       {<CommentStack.Screen
            name="Comment"
            component={CommentScreen}
            options={{
                title: 'Historical Sites',
                animation: 'none',
                headerTitleAlign: 'center',
               
            }}
        /> }


        
       {<PresidentStack.Screen
            name="President"
            component={PresidentScreen}
            options={{
                title: 'Beaches',
                animation: 'none',
                headerTitleAlign: 'center',
            }}
        /> }



    </HomeStack.Navigator>
);




const AddTaskStackScreen = () => (
    <AddTaskStack.Navigator>
        <AddTaskStack.Screen
            name="AddTaskStack"
            component={AddTaskScreen}
            options={{
                title: 'Historical Sites',
                animation: 'none',
                headerTitleAlign: 'center',
            }}
        />
    </AddTaskStack.Navigator>
);

const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
        <ProfileStack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                headerShown: false,
                headerShadowVisible: false,
                animation: 'none',
                headerStyle: {
                    backgroundColor: '#094FAF',
                },
                headerTitleStyle: {
                    color: '#87CEEB',
                },
            }}
        />
        <ProfileStack.Screen
            name="EditProfile"
            component={EditProfileScreen}
            options={{
                title: 'Profile',
                animation: 'none',
                headerBackTitleVisible: false,
            }}
        />
    </ProfileStack.Navigator>
);

export default AppNavigator;
