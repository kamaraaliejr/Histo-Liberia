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
                <ScrollView>

                <Text style={styles.label}>Bella Casa Hotel: {'\n'}
                {'\n'}
                Bella Casa is located next to the Monrovia City Hall and two miles the busy central district of Monrovia,
                 making it a perfect location for visitors to experience bustling Monrovia and return to the quiet of hotel.
                 Enjoy breakfast or dinner on the balcony, perfect for people watching or a beautiful view of the Ocean
                {'\n'}
                  {'\n'}
                  Guest services include a restaurant with complimentary full breakfast, free private parking, swimming pool, 
                  bar, 24-hour front desk, room service and currency exchange for guests. The rooms are fully air-conditioned, 
                  TV with satellite channels, in room coffee, and hot and cold showers.{'\n'}
                   {'\n'}
                   Rooms are complete with a private bathroom equipped with a bath, 
                   while certain accommodations at the hotel also feature a seating area. 
                   The Hotel offers excellent meeting and conferencing facilities.
                 </Text>

                 {/* <View style={styles.Try}>
                    <Image source={require('../assets/PBC.jpeg')} style={styles.Image} /> 
                </View> */}

  


<View  horizontal={true} style={{marginTop: 30,}} >
<View style={styles.Bella}>
         <Text style={styles.front}> Pictorial of Bella Casa Hotel 
         </Text>
         </View>
    <View style={styles.Try}>
        <Image source={require('../assets/Bella.jpeg')} style={styles.Image} /> 
        {/* <Text>PROVIDENCE ISLAND</Text> */}
    </View>

  

    <View style={styles.Try}>
        <Image source={require('../assets/bella2.jpg')}hotel style={styles.Image} 
        resizeMode='cover'/>
        
        {/* <Text>DUCOR HOTEL</Text> */}
    </View>
  


    <View style={styles.Try}>
        <Image source={require('../assets/bella3.jpg')} style={styles.Image} /> 
        {/* <Text>KPATAWEE WATERFALL</Text> */}
    </View>


    <View style={styles.Try}>
        <Image source={require('../assets/bella4.jpeg')} style={styles.Image} /> 
        {/* <Text> LIBERIA MESUEM</Text> */}
    </View>

    <View style={styles.Try}>
        <Image source={require('../assets/bella5.jpeg')} style={styles.Image} /> 
        {/* <Text>CAVALLA RIVER</Text> */}
    </View>


    <View style={styles.Try}>
        <Image source={require('../assets/bella6.jpeg')} style={styles.Image} /> 
        {/* <Text>PROVIDENCE BAPTIST</Text> */}
    </View>

    <View style={styles.Try}>
        <Image source={require('../assets/bella7.jpg')} style={styles.Image} /> 
        {/* <Text>WULKI FARMS</Text> */}
    </View>

    <View style={styles.Try}>
        <Image source={require('../assets/Bellacasa1.jpeg')} style={styles.Image} /> 
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

    front:{
        left: 90,
        color: 'black',
        fontSize: 20,
    },

    Bella{
        
    }

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
        marginBottom: 40,
    
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
