import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
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

    const handleLibassa = () => {
        // Perform sign-in logic here

        // Navigate to the main tab navigator
        navigation.navigate('Libassa');

    };

    
    const handleNana = () => {
        // Perform sign-in logic here

        // Navigate to the main tab navigator
        navigation.navigate('Nana');

    };

    
    const handleSilver = () => {
        // Perform sign-in logic here

        // Navigate to the main tab navigator
        navigation.navigate('Silver');

    };

    
    const handleTropicana = () => {
        // Perform sign-in logic here

        // Navigate to the main tab navigator
        navigation.navigate('Tropicana');

    };

    
    const handleJohn = () => {
        // Perform sign-in logic here

        // Navigate to the main tab navigator
        navigation.navigate('John');

    };

    
    const handleKokon = () => {
        // Perform sign-in logic here

        // Navigate to the main tab navigator
        navigation.navigate('Kokon');

    };

    
    const handleSunset = () => {
        // Perform sign-in logic here

        // Navigate to the main tab navigator
        navigation.navigate('Sunset');

    };

    
    const handleCece = () => {
        // Perform sign-in logic here

        // Navigate to the main tab navigator
        navigation.navigate('Cece');

    };

    
    const handleBernard = () => {
        // Perform sign-in logic here

        // Navigate to the main tab navigator
        navigation.navigate('Bernard');

    };

    
    const handleRiver = () => {
        // Perform sign-in logic here

        // Navigate to the main tab navigator
        navigation.navigate('River');

    };



    return (
        <View style={styles.container}>
         
                <Image
                    source={require('../assets/k6.jpeg')} // Replace with the path to your image
                    style={styles.profileImage}
                    // resizeMode="cover"
                />

                <ScrollView>
                    
                <View style={styles.box}>
                <Text style={styles.label}>Liberia Beaches</Text>
</View>

<View style={{marginTop: 30,}} >
<TouchableOpacity style={styles.Button}
     onPress={handleLibassa} 
        > 
    <View style={styles.Try}>

        <Image source={require('../assets/li.jpg')} style={styles.Image} /> 
        <Text> Libassa Ecolodge Beach</Text>
    </View>
</TouchableOpacity>
  

  
    <TouchableOpacity style={styles.Button}
         onPress={handleNana}
        >

    <View style={styles.Try}>
        <Image source={require('../assets/nana.jpeg')}hotel style={styles.Image} /> 
        <Text> Nana’s Lodge Beach</Text>
    </View>
    </TouchableOpacity>

   

    <TouchableOpacity style={styles.Button}
         onPress={handleSilver}
        >
    <View style={styles.Try}>
        <Image source={require('../assets/si.jpeg')} style={styles.Image} /> 
        <Text>Silver Beach </Text>
    </View>
    </TouchableOpacity>


    <TouchableOpacity style={styles.Button}
        onPress={handleTropicana}
        >
    <View style={styles.Try}>
        <Image source={require('../assets/tr.jpeg')} style={styles.Image} /> 
        <Text> Tropicana Beach 

</Text>
    </View>
    </TouchableOpacity>


    <TouchableOpacity style={styles.Button}
        onPress={handleJohn}
        >
    <View style={styles.Try}>
        <Image source={require('../assets/jb.jpeg')} style={styles.Image} /> 
        <Text>John Gbedze</Text>
    </View>
    </TouchableOpacity>

    
    <TouchableOpacity style={styles.Button}
         onPress={handleKokon}
        >
    <View style={styles.Try}>
        <Image source={require('../assets/ko.jpeg')} style={styles.Image} /> 
        <Text>KOKON ECOLODGE</Text>

    </View>
    </TouchableOpacity>
   

    <TouchableOpacity style={styles.Button}
         onPress={handleSunset}
        >
    <View style={styles.Try}>
        <Image source={require('../assets/sun.jpeg')} style={styles.Image} /> 
        <Text>Sunset Beach</Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.Button}
        onPress={handleCece}
        >
    <View style={styles.Try}>
        <Image source={require('../assets/cece.jpeg')} style={styles.Image} /> 
        <Text>Summer Beach</Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.Button}
         onPress={handleBernard}
        >
    <View style={styles.Try}>
        <Image source={require('../assets/be.jpg')} style={styles.Image} /> 
        <Text>Bernard's Beach</Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.Button}
        onPress={handleRiver}
        >
    <View style={styles.Try}>
        <Image source={require('../assets/rb.jpeg')} style={styles.Image} /> 
        <Text>Riverside Sea View Golf Beach</Text>
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

