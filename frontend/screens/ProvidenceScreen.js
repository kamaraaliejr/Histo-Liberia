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
                <Text style={styles.label}>PROVIDENCE ISLAND: {'\n'}
                {'\n'}
                This is a former trade post and the first arrival
                 point of freed American Slaves.
                 The site is characterized by a cement pillar and concrete floor believed to be the `first Concrete work in the history of the country,
                  an ancient water well and an old landing docking platform for incoming canoes and ships.{'\n'}
                  {'\n'}
                  Providence Island tells an important chapter in the history of the United States and its relationship to 
                  Africa and people of African descent. In 1822, the small island at the mouth of the Mesurado River became one 
                  of the first places freed slaves from America landed and founded the nation of Liberia. Originally called Dozoa, 
                  meaning “Land in the center of water” in the language of the Gola ethnic group who
                   then occupied Cape Mesurado, today the island is at the center of the modern city of Monrovia. {'\n'}
                   {'\n'}
                   The 250-year-old Cotton Tree still stands on Providence Island to this day as a testament to 
                   hope for humanity and the journey that led to Liberia's national identity. 
                   Visitors will also see a model palaver hut that settlers would have lived in at the time. 
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

        <Image source={require('../assets/liberia.jpg')} style={styles.Image} /> 
        {/* <Text>PROVIDENCE ISLAND</Text> */}
    </View>
</TouchableOpacity>
  
  
    <TouchableOpacity onPress={onPress} style={styles.Button}
        // onPress={handleDucor}
        >

    <View style={styles.Try}>
        <Image source={require('../assets/se.jpg')}hotel style={styles.Image} 
        resizeMode='cover'/>
        
        {/* <Text>DUCOR HOTEL</Text> */}
    </View>
    </TouchableOpacity>


    <View style={styles.Try}>
        <Image source={require('../assets/p1.jpg')} style={styles.Image} /> 
        {/* <Text>KPATAWEE WATERFALL</Text> */}
    </View>


    <View style={styles.Try}>
        <Image source={require('../assets/p2.jpg')} style={styles.Image} /> 
        {/* <Text> LIBERIA MESUEM</Text> */}
    </View>

    <View style={styles.Try}>
        <Image source={require('../assets/p3.jpeg')} style={styles.Image} /> 
        {/* <Text>CAVALLA RIVER</Text> */}
    </View>


    <View style={styles.Try}>
        <Image source={require('../assets/p4.jpeg')} style={styles.Image} /> 
        {/* <Text>PROVIDENCE BAPTIST</Text> */}
    </View>

    <View style={styles.Try}>
        <Image source={require('../assets/p5.jpg')} style={styles.Image} /> 
        {/* <Text>WULKI FARMS</Text> */}
    </View>

    <View style={styles.Try}>
        <Image source={require('../assets/p6.jpg')} style={styles.Image} /> 
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
