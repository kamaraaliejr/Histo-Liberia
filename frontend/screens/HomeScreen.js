import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
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
        <View style={styles.container}>
         
                <Image
                    source={require('../assets/liberia.jpg')} // Replace with the path to your image
                    style={styles.profileImage}
                    // resizeMode="cover"
                />


                <View style={styles.box}>
                <Text style={styles.label}>WELCOME TO HISTO LIBERIA</Text>

               
                <Image
                    source={require('../assets/logo.jpg')} // Replace with the path to your image
                    style={styles.logo}
                    // resizeMode="cover"
                />



 <Text style={styles.label}>With HISTO liberia mobile application, you can learn about
                liberia by navigating through the app.</Text>


             



                </View>

        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
   
    label: {
        fontSize: 20,
        fontWeight: 'bold',  
        marginBottom: 16,
        margin: 3,
        color: 'black',
        alignItems:'center',
        justifyContent: 'center',
        flex: 1
        
    },


    addButton: {
        backgroundColor: 'blue ',
        padding: 13,  // All sides are 10
        paddingHorizontal: 20,  // Left and right are 20
        borderRadius: 15,
        // marginTop: 20 ,
        width: '50%',
        alignSelf: 'center'
    },

    buttonText: {
        color: 'white',
        textAlign: 'center',
    },

    box:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        marginBottom: 4,
    },


    profileImage:{
        alignItems: "center",
        justifyContent: 'center',
        padding: 15,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        height: '50%',
        width: '200',
        marginBottom: 19,
        
        
    },

    logo:{
        width: 100,
        height:100,
        marginBottom: 50,
        paddingBottom: 4,
        resizeMode: 'cover',
        borderRadius:50,
        alignContent: 'center',
        
        
    },
    
    profileOption: {
        // width: '80%',
        // justifyContent: "center",

        // padding: 30,
        paddingTop: 50,
        paddingHorizontal: 30,
        gap: 20
    },

    option: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#eee',
        padding: 15,
        // marginTop: 20,
        gap: 15
    },




    inputContainer: {
        marginBottom: 25,
    },

    value: {
        // marginBottom: 15,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: '#EEEEEE', // Input border color
        // borderWidth: 1,
        // borderRadius: 5,
        borderBottomWidth: 2,
        // marginTop: 15,
        // paddingHorizontal: 10,
        // color: '#eee'
    },
});

export default ProfileScreen;
