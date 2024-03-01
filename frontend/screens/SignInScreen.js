import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { URL } from '../constant';


const SignInScreen = function ({ navigation }) {
    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const handleSignIn = () => {
        // validate input
        if (!data.email || !data.password) {
            Alert.alert(
                'Missing field', 'Email and Password are required'
            ), [{ text: 'Okay' }];
            return;
        };

        // Make a request to your API for user login
        axios.post(`${URL}/login`, {
            email: data.email,
            password: data.password

        }, {
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {
            console.log('Response!', response.data)

            // Get Acess, Refresh Token, id
            const { access_token, refresh_token, id, firstname, lastname, username, image_uri } = response.data;

            // Save the tokens to AsyncStorage for future requests
            AsyncStorage.setItem('accessToken', access_token);
            AsyncStorage.setItem('refreshToken', refresh_token);
            AsyncStorage.setItem('UserId', String(id));
            AsyncStorage.setItem('firstname', firstname);
            AsyncStorage.setItem('lastName', lastname);
            AsyncStorage.setItem('userName', username);
            // AsyncStorage.setItem('userProfile', String(image_uri));

            // Navigate to the Home Screen
            // navigation.navigate('MainTabs')

            // This prevent route back to the login screen when login
            navigation.reset({
                index: 0,
                routes: [{ name: 'MainTabs' }],
            });

        }).catch((err) => {
            // Handle login failure
            console.log('Login failed', err.response);

            // Display an error message to the user
            Alert.alert('Login Failed', 'Invalid username or password.');

        });
    };

    return (
        <KeyboardAvoidingView behavior='padding'
            keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 70}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView
                    SafeAreaView showsVerticalScrollIndicator={false}
                    style={{ paddingTop: 130, paddingHorizontal: 35, }}
                >
                      
                <Image
                    source={require('../assets/logo.jpg')} // Replace with the path to your image
                    style={styles.logo}
                    // resizeMode="cover"
                />

                    <Text style={styles.signInText}>Sign In</Text>

                    <View style={styles.form}>
                    <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor={'#eee'}
                            value={data.email}
                            onChangeText={(val) => setData({ ...data, email: val })}
                            autoCapitalize="none" // Ensure email is not auto-capitalized
                            keyboardType="email-address" // Set keyboard type to email address for better user experience
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor={'#eee'}
                            value={data.password}
                            onChangeText={(val) => setData({ ...data, password: val })}
                            secureTextEntry={true} // Set to true to hide text content
                        />

                        <TouchableOpacity style={styles.addButton}
                            onPress={handleSignIn}
                        >
                            <Text style={styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.option}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SignUp')}
                        >
                            <Text style={styles.optionText}>Create Account</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('UpdatePasword')}
                        >
                            <Text style={styles.optionText}>Forget Password?</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#87CEEB', // Background color
        // padding: 10,  // All sides are 10
        // paddingHorizontal: 50,  // Left and right are 20
    },
    signInText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white', // Text color
        marginBottom: 20,
        alignSelf: "center"

    },
    form: {
        justifyContent: "space-between",
        alignContent: "center"
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'white', // Input border color
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 15,
        paddingHorizontal: 10,
        color: '#eee'
    },


    logo:{
        width: 100,
        height:100,
        marginBottom: 50,
        paddingBottom: 4,
        resizeMode: 'cover',
        borderRadius:50,
        alignContent: 'center',
        left: 100
        
    },
    

    option: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },

    optionText: {
        color: '#fff',
    },

    addButton: {
        backgroundColor: '#fff',
        padding: 13,  // All sides are 10
        marginTop: 30,
        width: '100%',
        alignSelf: 'center',
        marginBottom: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    buttonText: {
        color: '#094FAF',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    button: {
        borderRadius: 10, // Set the border radius
        borderWidth: 2, // Set the border width
        borderColor: '#3498db', // Set the border color to blue
        padding: 10, // Add some padding for better visual appearance
    },
});

export default SignInScreen;

