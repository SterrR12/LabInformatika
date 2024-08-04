import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const validUsername = 'admin';
        const validPassword = 'password';

        if (username === validUsername && password === validPassword) {
            navigation.replace('Main');
        } else {
            Alert.alert('Login Gagal', 'Username atau Password salah');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.loginTitle}>Login</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <Icon name="person-outline" size={20} color="#666" style={styles.icon} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <Icon name="lock-closed-outline" size={20} color="#666" style={styles.icon} />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.signupText}>Belum punya akun? <Text style={styles.signup}>Signup</Text></Text>
            </TouchableOpacity>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/google.png')}
                    style={styles.imageGoogle}
                />
                <Image 
                    source={require('../../assets/facebook.png')}
                    style={styles.imageFacebook}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    loginTitle: {
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 12,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingVertical: 5,
    },
    icon: {
        marginLeft: 10,
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 5,
        elevation: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    signupText: {
        color: '#000',
        fontSize: 16,
        marginTop: 20,
        textAlign: 'center',
    },
    signup: {
        color: '#007BFF',
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    imageGoogle: {
        width: 50,
        height: 50,
        marginRight: 15,
    },
    imageFacebook: {
        width: 40,
        height: 40,
        marginLeft: 15,
    },
});
