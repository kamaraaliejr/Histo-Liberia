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

    const handleRoyal = () => {
        // Perform sign-in logic here


        // Navigate to the main tab navigator
        navigation.navigate('Royal');

    };

    
    const handleBellaCasa = () => {
        // Perform sign-in logic here


        // Navigate to the main tab navigator
        navigation.navigate('BellaCasa');

    };

    
    const handleFarmington= () => {
        // Perform sign-in logic here


        // Navigate to the main tab navigator
        navigation.navigate('Farmington');

    };

    
    const handleBoulevard = () => {
        // Perform sign-in logic here


        // Navigate to the main tab navigator
        navigation.navigate('Boulevard');

    };

    
    const handleDeCalabash = () => {
        // Perform sign-in logic here


        // Navigate to the main tab navigator
        navigation.navigate('DeCalabash');

    };

    
    const handleMambaPoint = () => {
        // Perform sign-in logic here


        // Navigate to the main tab navigator
        navigation.navigate('MambaPoint');

    };

    
    const handlePalmSpring = () => {
        // Perform sign-in logic here


        // Navigate to the main tab navigator
        navigation.navigate('PalmSpring');

    };

    
    const handleGoldenKey = () => {
        // Perform sign-in logic here


        // Navigate to the main tab navigator
        navigation.navigate('GoldenKey');

    };

    
    const handleGoldenGate = () => {
        // Perform sign-in logic here


        // Navigate to the main tab navigator
        navigation.navigate('GoldenGate');

    };

    
    const handleSinkorPalace = () => {
        // Perform sign-in logic here


        // Navigate to the main tab navigator
        navigation.navigate('SinkorPalace');

    };




    return (
        <View style={styles.container}>
         
                <Image
                    source={require('../assets/ro2.jpg')} // Replace with the path to your image
                    style={styles.profileImage}
                    // resizeMode="cover"
                />


                <ScrollView>
                    
                <View style={styles.box}>
                <Text style={styles.label}>Liberia Hotels</Text>
</View>


<View style={{marginTop: 30,}} >
<TouchableOpacity style={styles.Button}
     onPress={handleRoyal} 
        > 
    <View style={styles.Try}>

        <Image source={require('../assets/ro1.jpg')} style={styles.Image} /> 
        <Text>Royal Grand Hotel</Text>
    </View>
</TouchableOpacity>
  

  
    <TouchableOpacity style={styles.Button}
         onPress={handleBellaCasa}
        >

    <View style={styles.Try}>
        <Image source={require('../assets/Bellacasa1.jpeg')}hotel style={styles.Image} /> 
        <Text> Bella Casa Hotel</Text>
    </View>
    </TouchableOpacity>

   


    <TouchableOpacity style={styles.Button}
         onPress={handleFarmington}
        >
    <View style={styles.Try}>
        <Image source={require('../assets/farm1.jpg')} style={styles.Image} /> 
        <Text>Farmington Hotel </Text>
    </View>
    </TouchableOpacity>



    <TouchableOpacity style={styles.Button}
        onPress={handleBoulevard}
        >
    <View style={styles.Try}>
        <Image source={require('../assets/boulevard1.jpg')} style={styles.Image} /> 
        <Text> Boulevard Hotel 

</Text>
    </View>
    </TouchableOpacity>



    <TouchableOpacity style={styles.Button}
        onPress={handleDeCalabash}
        >
    <View style={styles.Try}>
        <Image source={require('../assets/calabash.jpg')} style={styles.Image} /> 
        <Text>De-Calabash Hotel</Text>
    </View>
    </TouchableOpacity>

    
    <TouchableOpacity style={styles.Button}
         onPress={handleMambaPoint}
        >
    <View style={styles.Try}>
        <Image source={require('../assets/mamba.jpg')} style={styles.Image} /> 
        <Text>MambaPoint Hotel</Text>

    </View>
    </TouchableOpacity>
   


    <TouchableOpacity style={styles.Button}
         onPress={handleGoldenKey}
        >
    <View style={styles.Try}>
        <Image source={require('../assets/goldenkey1.jpg')} style={styles.Image} /> 
        <Text>Golden Kay Hotel</Text>
    </View>
    </TouchableOpacity>


    <TouchableOpacity style={styles.Button}
        onPress={handleGoldenGate}
        >
    <View style={styles.Try}>
        <Image source={require('../assets/goldengate1.jpg')} style={styles.Image} /> 
        <Text>Golden Gate Hotel</Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.Button}
         onPress={handlePalmSpring}
        >
    <View style={styles.Try}>
        <Image source={require('../assets/plam.jpg')} style={styles.Image} /> 
        <Text>Palm Spring Hotel</Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.Button}
        onPress={handleSinkorPalace}
        >
    <View style={styles.Try}>
        <Image source={require('../assets/sinkorpalace1.jpg')} style={styles.Image} /> 
        <Text>Sinkor Palace Hotel</Text>
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
