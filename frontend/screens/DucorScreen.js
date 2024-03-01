import React from 'react';
import { View,  SafeAreaView, Text, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
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
                <Text style={styles.label}>DUCOR HOTEL: {'\n'}
                {'\n'}
                Ducor Hall was built in the1920s by Charles Edward Cooper, former Liberian diplomat and author of one of Liberia’s first novels, 
                “Love in Ebony”.  Charles Cooper was the son of Jessie Reed Cooper and Florence Irene Wiles-Cooper. He served as Liberia’s Consul General to the Court of St.{'\n'}
                 James in England from 1922 to 1931.{'\n'}
                 {'\n'}
                  While in England, he purchased the winning ticket for a horse race that won a large sum of money.  
                 When his friend, Winston Churchill asked him what he planned do with the money,
                  Cooper replied that he wanted to build a house just like the one he passed by every day in Liverpool. 
                  Arrangements were made to build his dream house in Liberia. Cooper hired a British architect and a contractor who travelled to Liberia to commence the work. 
                The building, completed in 1929, was christened Ducor Hall.{'\n'}
    
                   Mr. Cooper and his wife, Jeanette L. Howard-Cooper (she later married former President C.D.B. King) returned to Liberia in 1931 and took up residence in Ducor Hall. 
                   The four-story building was a striking piece of architecture in those days.
                    {'\n'}
                   {'\n'}
                  
                  
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

        <Image source={require('../assets/h.jpg')} style={styles.Image} /> 
        {/* <Text>PROVIDENCE ISLAND</Text> */}
    </View>
</TouchableOpacity>
  
  
    <TouchableOpacity style={styles.Button}
        // onPress={handleDucor}
        >

    <View style={styles.Try}>
        <Image source={require('../assets/hotel.jpeg')}hotel style={styles.Image} 
        resizeMode='cover'/>
        
        {/* <Text>DUCOR HOTEL</Text> */}
    </View>
    </TouchableOpacity>


    <View style={styles.Try}>
        <Image source={require('../assets/d1.jpg')} style={styles.Image} /> 
        {/* <Text>KPATAWEE WATERFALL</Text> */}
    </View>


    <View style={styles.Try}>
        <Image source={require('../assets/dh.jpg')} style={styles.Image} /> 
        {/* <Text> LIBERIA MESUEM</Text> */}
    </View>

    <View style={styles.Try}>
        <Image source={require('../assets/08.jpg')} style={styles.Image} /> 
        {/* <Text>CAVALLA RIVER</Text> */}
    </View>


    <View style={styles.Try}>
        <Image source={require('../assets/i.jpg')} style={styles.Image} /> 
        {/* <Text>PROVIDENCE BAPTIST</Text> */}
    </View>

    <View style={styles.Try}>
        <Image source={require('../assets/D.jpg')} style={styles.Image} /> 
        {/* <Text>WULKI FARMS</Text> */}
    </View>

    <View style={styles.Try}>
        <Image source={require('../assets/ducor.jpg')} style={styles.Image} /> 
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
        height: 600,
        
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
