import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={styles.logoContainer}>
                <Image
                    source={require('./img/haltere.png')} // Caminho para a imagem local
                    style={styles.image}
                    resizeMode="cover"
                />
                <Text style={styles.text}>FitTrack</Text>
            </View>

            <TextInput placeholder="Username" style={styles.input} placeholderTextColor="#999" />
            <TextInput placeholder="Password" secureTextEntry style={styles.input} placeholderTextColor="#999" />

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Main')}>
                    <Text style={styles.buttonTextLogin}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.buttonTextSignUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.forgotPasswordContainer} onPress={() => navigation.navigate('Forgot')}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#000',
    },
    logoContainer: {
        position: 'absolute', // Fixa o logoContainer na posição desejada
        top: 140, // Ajusta a distância do topo (pode ajustar para o espaçamento desejado)
        alignSelf: 'center', // Centraliza horizontalmente
        flexDirection: 'row', // Alinha a imagem e o texto na horizontal
        alignItems: 'center', // Centraliza verticalmente dentro do logoContainer
        marginBottom: 20,
    },
    image: {
        width: 50, // Largura da imagem
        height: 50, // Altura da imagem
        marginRight: 10, // Espaço entre a imagem e o texto
        tintColor: '#fff',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    input: {
        height: 40,
        backgroundColor: '#ccc',
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 15,
        borderRadius: 20,
        color: '#000',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    loginButton: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 50,
        flex: 1,
        marginRight: 5,
    },
    signupButton: {
        backgroundColor: '#175287',
        padding: 20,
        borderRadius: 50,
        flex: 1,
        marginLeft: 5,
    },
    buttonTextSignUp: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
    },
    buttonTextLogin: {
        textAlign: 'center',
        color: '#000',
        fontWeight: 'bold',
    },
    forgotPasswordContainer: {
        marginTop: 10,
        alignItems: 'flex-end',
    },
    forgotPasswordText: {
        color: '#fff',
    },
});

export default LoginScreen;
