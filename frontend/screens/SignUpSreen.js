import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Alert } from 'react-native';
import { URL } from '../constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const SignUpScreen = function ({ navigation }) {
    
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        comfirmPasword: "",
    });


    const handleSignUp = () => {

        console.log('click');

        if (
            !data.firstName ||
            !data.lastName ||
            !data.email ||
            !data.password
        ) {
            Alert.alert('Missing fields', 'You have some missing fields to fill');
            return;
        };

        if (data.password !== data.comfirmPasword) {
            Alert.alert('Password Mismatch', 'Password and Confirm Password did not match');
            return;
        };

        axios.post(`${URL}/register`, {
            firstname: data.firstName,
            lastname: data.lastName,
            username: data.userName,
            email: data.email,
            password: data.password,
        }, {
            headers: { 'Content-Type': 'application/json' }

        }).then((response) => {
            console.log('Response', response.data)

            const jsonValue = JSON.stringify(response.data)
            AsyncStorage.setItem('userData', jsonValue)
            
            Alert.alert(
                'Account Created Successfully', 'Please Login In',
                [{ text: 'Okay', onPress: () => navigation.navigate('SignIn') }]
            );
        }).catch((err) => {
            console.log('Error!', err.response.data)
            if (err.response && err.response.data && err.response.data.message) {
                Alert.alert('Registration Error', err.response.data.message);
            }
        });
    };

    return (
        <KeyboardAvoidingView behavior='padding'
            keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 70}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView
                    ScrollView showsVerticalScrollIndicator={false}
                    style={{ paddingTop: 130, paddingHorizontal: 35, }}
                >
                    <Text style={styles.signInText}>Create your Account</Text>

                    <View style={{ marginBottom: 150 }}>
                    <TextInput
                                style={styles.input}
                                placeholder="First Name"
                                placeholderTextColor="#eee"
                                value={data.firstName}
                                onChangeText={(val) => setData({ ...data, firstName: val })}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Last Name"
                                placeholderTextColor="#eee"
                                value={data.lastName}
                                onChangeText={(val) => setData({ ...data, lastName: val })}
                            />

                            <TextInput
                                style={styles.input}
                                placeholder="Username"
                                placeholderTextColor="#eee"
                                value={data.userName}
                                onChangeText={(val) => setData({ ...data, userName: val })}
                                autoCapitalize="none" // Ensure email is not auto-capitalized
                            />

                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                placeholderTextColor="#eee"
                                value={data.email}
                                onChangeText={(val) => setData({ ...data, email: val })}
                                autoCapitalize="none" // Ensure email is not auto-capitalized
                                keyboardType="email-address" // Set keyboard type to email address for better user experience
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                placeholderTextColor="#eee"
                                value={data.password}
                                secureTextEntry={true}  // Set to true to hide text content
                                onChangeText={(val) => setData({ ...data, password: val })}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Comfirm Password"
                                placeholderTextColor="#eee"
                                value={data.comfirmPasword}
                                secureTextEntry={true}  // Set to true to hide text content
                                onChangeText={(val) => setData({ ...data, comfirmPasword: val })}
                            />

                        <TouchableOpacity style={styles.addButton}
                            onPress={handleSignUp}
                        >
                            <Text style={styles.buttonText}>Create Account</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#87CEEB', // Background color
    },
    signInText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white', // Text color
        marginBottom: 20,
        alignSelf: "center"

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
        // marginBottom: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    buttonText: {
        color: '#87CEEB',
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

export default SignUpScreen;

