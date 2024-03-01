import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
// import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
    // Dummy data for profile informatio



    const handleProvidence = () => {
        // Perform sign-in logic here


        // Navigate to the main tab navigator
        navigation.navigate('Providence');

    };

    const handleDucor = () => {
        // Perform sign-in logic here


        // Navigate to the main tab navigator
        navigation.navigate('Ducor');
    };

        const handleKpawatee = () => {
            // Perform sign-in logic here
    
    
            // Navigate to the main tab navigator
            navigation.navigate('Kpawatee');
    

    };


    const handleCavalla = () => {
        // Perform sign-in logic here


        // Navigate to the main tab navigator
        navigation.navigate('Cavalla');


};

    const handleProfidenceBaptist = () => {
    // Perform sign-in logic here


    // Navigate to the main tab navigator
    navigation.navigate('Profidence');


};



    const handleWulki = () => {
    // Perform sign-in logic here


    // Navigate to the main tab navigator
    navigation.navigate('Wulki');


};




const handleHotel = () => {
    // Perform sign-in logic here


    // Navigate to the main tab navigator
    navigation.navigate('Hotel');


};




    const handleMesuem = () => {
        // Perform sign-in logic here


        // Navigate to the main tab navigator
        navigation.navigate('Mesuem');


};


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
                    source={require('../assets/k6.jpeg')} // Replace with the path to your image
                    style={styles.profileImage}
                    // resizeMode="cover"
                />

          <ScrollView>

            <View style={{marginTop: 30,}} >
            <TouchableOpacity style={styles.Button}
                    onPress={handleProvidence} 
                    > 
                <View style={styles.Try}>

                    <Image source={require('../assets/liberia.jpg')} style={styles.Image} /> 
                    <Text>PROVIDENCE ISLAND</Text>
                </View>
            </TouchableOpacity>
              

              
                <TouchableOpacity style={styles.Button}
                    onPress={handleDucor}
                    >

                <View style={styles.Try}>
                    <Image source={require('../assets/hotel.jpeg')}hotel style={styles.Image} /> 
                    <Text>DUCOR HOTEL</Text>
                </View>
                </TouchableOpacity>

               


                <TouchableOpacity style={styles.Button}
                    onPress={handleKpawatee}
                    >
                <View style={styles.Try}>
                    <Image source={require('../assets/k4.jpeg')} style={styles.Image} /> 
                    <Text>KPATAWEE WATERFALL</Text>
                </View>
                </TouchableOpacity>



                <TouchableOpacity style={styles.Button}
                    onPress={handleMesuem}
                    >
                <View style={styles.Try}>
                    <Image source={require('../assets/M1.jpeg')} style={styles.Image} /> 
                    <Text> LIBERIA MESUEM</Text>
                </View>
                </TouchableOpacity>



                <TouchableOpacity style={styles.Button}
                    onPress={handleCavalla}
                    >
                <View style={styles.Try}>
                    <Image source={require('../assets/cavalla.jpg')} style={styles.Image} /> 
                    <Text>CAVALLA RIVER</Text>
                </View>
                </TouchableOpacity>

                
                <TouchableOpacity style={styles.Button}
                    onPress={handleProfidenceBaptist}
                    >
                <View style={styles.Try}>
                    <Image source={require('../assets/PBC.jpeg')} style={styles.Image} /> 
                    <Text>PROVIDENCE BAPTIST CHURCH</Text>

                </View>
                </TouchableOpacity>
               


                <TouchableOpacity style={styles.Button}
                    onPress={handleWulki}
                    >
                <View style={styles.Try}>
                    <Image source={require('../assets/Wulki.jpeg')} style={styles.Image} /> 
                    <Text>WULKI FARMS</Text>
                </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.Button}
                    onPress={handleHotel}
                    >
                <View style={styles.Try}>
                    <Image source={require('../assets/Hotel.jpg')} style={styles.Image} /> 
                    <Text>Hotel Africa</Text>
                </View>
                </TouchableOpacity>

               
            </View>
          </ScrollView>

            

        </View>



    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20,
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

    
    Try:{
        flexDirection: "row",
        alignItems: "center",
        alignContent: 'center',
        // justifyContent: 'center',
        marginTop: 15,
        gap: 15,
    },

    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 75,
      
    },

    container: {
        flex: 1,
        // flexDirection: 'row',
        alignItems: 'crenter',
        padding:10,
        marginBottom: 30,

    },

     Image: {
        width: 90,
        height:90,
        margin:5,
        resizeMode: 'cover',
        borderRadius:50,
        alignContent: 'center',
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
        height: '30%',
        width: '200',
        marginBottom: 35,
        
        
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
