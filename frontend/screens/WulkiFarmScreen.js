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
                <Text style={styles.label}>Wulki Farm: {'\n'}
                {'\n'}
                Wulki Farm in Careysburg, is an agricultural venture, established in November 1998. 
                Wulki Farms is the largest livestock and vegetable farm in Liberia. 
                It is largely focused on poultry, rubber farming and hospitality and is the 
                largest livestock and vegetable farm in Liberia.{'\n'}
                  {'\n'}
                  The farm in  Careysburg is largely focused on poultry, rubber farming and hospitality 
                  and is the largest livestock and vegetable farm in Liberia. 
                  Farmer's Paradise, which includes a restaurant, several swimming pools, and chalets. 
                  Patrons get to enjoy the amazing food at our restaurants, access to the breathtaking rock creek and bridge, 
                  basketball and tennis courts, go for runs, play volleyball, etc.
                  Commissioned in 1958, it was imagined as a sanctuary to safeguard, celebrate, and share the myriad artefacts
                   and narratives that construct Liberia's unique heritage.{'\n'}
                   {'\n'}
                   Currently, Wulki Farms is the only producers of table eggs in Liberia for commercial purposes.
                   Wulki Farms has been in operations for 10 years and is run by a 7-member board of directors which is chaired by 
                   Mr. Benoni Urey.  The daily operations are managed by its CEO, Mrs. Mai Bright Urey.
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

        <Image source={require('../assets/wf4.jpg')} style={styles.Image} /> 
        {/* <Text>PROVIDENCE ISLAND</Text> */}
    </View>
</TouchableOpacity>
  
  
    <TouchableOpacity onPress={onPress} style={styles.Button}
        // onPress={handleDucor}
        >

    <View style={styles.Try}>
        <Image source={require('../assets/wf5.jpg')}hotel style={styles.Image} 
        resizeMode='cover'/>
        
        {/* <Text>DUCOR HOTEL</Text> */}
    </View>
    </TouchableOpacity>


    <View style={styles.Try}>
        <Image source={require('../assets/wf6.jpg')} style={styles.Image} /> 
        {/* <Text>KPATAWEE WATERFALL</Text> */}
    </View>


    <View style={styles.Try}>
        <Image source={require('../assets/m4.jpg')} style={styles.Image} /> 
        {/* <Text> LIBERIA MESUEM</Text> */}
    </View>

    <View style={styles.Try}>
        <Image source={require('../assets/m5.jpeg')} style={styles.Image} /> 
        {/* <Text>CAVALLA RIVER</Text> */}
    </View>


    <View style={styles.Try}>
        <Image source={require('../assets/wf2.jpeg')} style={styles.Image} /> 
        {/* <Text>PROVIDENCE BAPTIST</Text> */}
    </View>

    <View style={styles.Try}>
        <Image source={require('../assets/wf7.jpg')} style={styles.Image} /> 
        {/* <Text>WULKI FARMS</Text> */}
    </View>

    <View style={styles.Try}>
        <Image source={require('../assets/Wulki.jpeg')} style={styles.Image} /> 
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
        width: 300,
        height:200,
        margin:5,
        resizeMode: 'cover',
        // borderRadius:50,
        alignContent: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
        marginLeft: 37,
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
