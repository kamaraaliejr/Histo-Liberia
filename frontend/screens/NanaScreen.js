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
                <Text style={styles.label}>Libassa Ecolodge: {'\n'}
                {'\n'}
                Established in 2008 as Robertsport’s first beach eco resort. Each wooden cabin offers luxury beds 
                with a private view of the beach. The resort offers beach cabanas for sunbathing or lounging. Rooms 
                priced from $80– $240 per night, include breakfast. All-inclusive rooms include lunch and dinner. Perfect location
                 for weddings, birthdays, group retreats and more. 
                {'\n'}
                  {'\n'}
                 The beach is good for relaxzation, and many other beautifulthings. Visit Liberia today, and 
                 experience the beauty of the country.  {'\n'}
                   {'\n'}
                   Your experience at Nana's beach will never be forgeten, and you will always love to be there. 
                   Nana's Lodge was my first stop in my adventure through Liberia. The lodge is very relaxing
                    and an excellent place to meet other travelers.
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

        <Image source={require('../assets/na1.jpeg')} style={styles.Image} /> 
        {/* <Text>PROVIDENCE ISLAND</Text> */}
    </View>
</TouchableOpacity>
  
  
    <TouchableOpacity onPress={onPress} style={styles.Button}
        // onPress={handleDucor}
        >

    <View style={styles.Try}>
        <Image source={require('../assets/na2.jpeg')}hotel style={styles.Image} 
        resizeMode='cover'/>
        
        {/* <Text>DUCOR HOTEL</Text> */}
    </View>
    </TouchableOpacity>


    <View style={styles.Try}>
        <Image source={require('../assets/na3.jpeg')} style={styles.Image} /> 
        {/* <Text>KPATAWEE WATERFALL</Text> */}
    </View>


    <View style={styles.Try}>
        <Image source={require('../assets/na4.jpeg')} style={styles.Image} /> 
        {/* <Text> LIBERIA MESUEM</Text> */}
    </View>

    <View style={styles.Try}>
        <Image source={require('../assets/na5.jpeg')} style={styles.Image} /> 
        {/* <Text>CAVALLA RIVER</Text> */}
    </View>


    <View style={styles.Try}>
        <Image source={require('../assets/na6.jpeg')} style={styles.Image} /> 
        {/* <Text>PROVIDENCE BAPTIST</Text> */}
    </View>

    <View style={styles.Try}>
        <Image source={require('../assets/na7.jpg')} style={styles.Image} /> 
        {/* <Text>WULKI FARMS</Text> */}
    </View>

    <View style={styles.Try}>
        <Image source={require('../assets/na8.jpg')} style={styles.Image} /> 
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
