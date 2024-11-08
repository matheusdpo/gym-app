import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';

const ForgotPasswdScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleSendLink = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        navigation.navigate('Login'); // Navega para a tela principal após fechar o modal
    };

    return (
        <View style={styles.container}>

            <View style={styles.logoContainer}>
                <Image
                    source={require('./img/haltere.png')} 
                    style={styles.image}
                    resizeMode="cover"
                />
                <Text style={styles.text}>Forgot your Password?</Text>
            </View>

            <TextInput placeholder="Type here your e-mail" style={styles.input} placeholderTextColor="#999" />
            <TextInput placeholder="Confirm your email"  style={styles.input} placeholderTextColor="#999" />

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.loginButton} onPress={handleSendLink}>
                    <Text style={styles.buttonText}>Send Link</Text>
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>A password reset link has been sent to your email.</Text>
                        <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
                            <Text style={styles.modalButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
        position: 'absolute',
        top: 140,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
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
        backgroundColor: '#175287',
        padding: 20,
        borderRadius: 50,
        flex: 1,
        marginRight: 5,
    },
    buttonText: {
        textAlign: 'center',
        color: '#000',
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        marginBottom: 15,
        fontSize: 16,
        textAlign: 'center',
    },
    modalButton: {
        backgroundColor: '#175287',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 100,
    },
    modalButtonText: {
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ForgotPasswdScreen;
