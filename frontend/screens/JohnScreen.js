import React from 'react';
import { View,  SafeAreaView, Text, Image, StyleSheet, ScrollView, TextInput,  onPress, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
    // Dummy data for profile information
    const profileData = {
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe123',
        email: 'john.doe@example.com',
        gender: 'Male',
        address: '123 Main Street, Cityville',
        phone: '123-456-7890',
    };

    return (
       
        // <SafeAreaView style={styles.safeArea}>
      
            <View style={styles.container}>
                <Text style={styles.label}>John Gbedze: {'\n'}
                {'\n'}
                John w. Gbedzee Beach and Resort is located in Bens town, Marshall road. A 30-minute drive from the airport and 45 minute drive
                 from central Monrovia. Want to have a pool party or a bachelorette party? Maybe you want to be away from the crowd and need a
                  place to cool up. Coming to Liberia and need a place not too far from the airport? John w. Gbedzee Beach and Resort
                   is the right place for you. They have a friendly, eco-friendly environment, a large pool for all ages, the most
                    extensive beachfront in Liberia, conference rooms, a motorboats ride, and a children's playground. 
                {'\n'}
                  {'\n'}
                  JWG offers
                     a 24 hours internet service and security, tea, water, and coffee; they also give breakfast and cafe boxes deposit, 
                     all on the house. Can you imagine!!!! I'm excited already!  {'\n'}
                   {'\n'}
                   At JWG, you will find all the services necessary to make your stay a
                     comfortable and memorable one. Enjoy our facilities such as the Restaurants, Event Centers, Conference Rooms,
                    Fitness Rooms, SPA, 24 hours Security, and Parking Service for your convenience.
                 </Text>

                 {/* <View style={styles.Try}>
                    <Image source={require('../assets/PBC.jpeg')} style={styles.Image} /> 
                </View> */}

  

<ScrollView>

<View  horizontal={true} style={{marginTop: 30,}} >
<TouchableOpacity style={styles.Button}
        // onPress={handleProvidence} 
        > 
    <View style={styles.Try}>

        <Image source={require('../assets/jb1.jpg')} style={styles.Image} /> 
        {/* <Text>PROVIDENCE ISLAND</Text> */}
    </View>
</TouchableOpacity>
  
  
    <TouchableOpacity onPress={onPress} style={styles.Button}
        // onPress={handleDucor}
        >

    <View style={styles.Try}>
        <Image source={require('../assets/jb2.jpg')}hotel style={styles.Image} 
        resizeMode='cover'/>
        
        {/* <Text>DUCOR HOTEL</Text> */}
    </View>
    </TouchableOpacity>


    <View style={styles.Try}>
        <Image source={require('../assets/jb3.jpg')} style={styles.Image} /> 
        {/* <Text>KPATAWEE WATERFALL</Text> */}
    </View>


    <View style={styles.Try}>
        <Image source={require('../assets/jb4.jpg')} style={styles.Image} /> 
        {/* <Text> LIBERIA MESUEM</Text> */}
    </View>

    <View style={styles.Try}>
        <Image source={require('../assets/jb5.jpg')} style={styles.Image} /> 
        {/* <Text>CAVALLA RIVER</Text> */}
    </View>


    <View style={styles.Try}>
        <Image source={require('../assets/jb6.jpeg')} style={styles.Image} /> 
        {/* <Text>PROVIDENCE BAPTIST</Text> */}
    </View>

    <View style={styles.Try}>
        <Image source={require('../assets/jb7.jpeg')} style={styles.Image} /> 
        {/* <Text>WULKI FARMS</Text> */}
    </View>

    <View style={styles.Try}>
        <Image source={require('../assets/jb.jpg')} style={styles.Image} /> 
        {/* <Text>PROVIDENCE BAPTIST</Text> */}
    </View>

   
</View>
</ScrollView>
        
            </View>

            

           
           
            
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'crenter',
        // justifyContent: 'center',
        backgroundColor: '#fff',
        // flexDirection: 'row',
        
    },

    Try:{
        flexDirection: "row",
        alignItems: "center",
        alignContent: 'center',
        // justifyContent: 'center',
        marginTop: 15,
        gap: 15,
    },

    Image: {
        width: 450,
        height:200,
        // marginRight: 3,
        resizeMode: 'cover',
        // borderRadius:50,
        alignContent: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
        alignSelf: 'center',
        marginBottom: 10,
    },


    // Try:{
    //     flexDirection: 'row'
    // }

    safeArea: {
        flex: 1,
      },

    label: {
           fontSize: 16,
           color: 'black',
           marginTop: 20,
          textAlign: 'center',
          paddingTop: 20,
          margin: 3, 
    },




    
});

export default ProfileScreen;
