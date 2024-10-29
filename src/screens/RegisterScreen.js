import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";

const RegisterScreen = ({ navigation }) => { // Destructure navigation prop correctly
  const [selectedGender, setSelectedGender] = useState("Masculino");
  const [modalVisible, setModalVisible] = useState(false);

  const handleSendLink = () => {
    setModalVisible(true);
  };

  const handleOkPress = () => {
    setModalVisible(false);
    navigation.navigate('Login'); // Navigate to the Login screen after closing the modal
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("./img/haltere.png")}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.text}>Sign Up</Text>
      </View>

      <TextInput
        placeholder="Name"
        style={styles.input}
        placeholderTextColor="#999"
      />
      <TextInput
        placeholder="Last name"
        style={styles.input}
        placeholderTextColor="#999"
      />
      <TextInput
        placeholder="E-mail"
        style={styles.input}
        placeholderTextColor="#999"
      />
      <TextInput
        placeholder="Phone"
        style={styles.input}
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Selecione seu gênero:</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => setSelectedGender("Masculino")}
        >
          <View style={styles.radioCircle}>
            {selectedGender === "Masculino" && <View style={styles.selectedRb} />}
          </View>
          <Text style={styles.radioText}>Masculino</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => setSelectedGender("Feminino")}
        >
          <View style={styles.radioCircle}>
            {selectedGender === "Feminino" && <View style={styles.selectedRb} />}
          </View>
          <Text style={styles.radioText}>Feminino</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="Height (cm)"
        style={styles.input}
        placeholderTextColor="#999"
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Weight (kg)"
        style={styles.input}
        placeholderTextColor="#999"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleSendLink}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Modal para confirmação */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              The confirmation link was sent to your email!
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleOkPress} // Navigate to Login on OK press
            >
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
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#000",
  },
  logoContainer: {
    position: "absolute",
    top: 90,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    tintColor: "#fff",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  input: {
    height: 40,
    backgroundColor: "#ccc",
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 20,
    color: "#000",
  },
  label: {
    color: "#fff",
    marginBottom: 10,
  },
  radioContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRb: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#FFA500",
  },
  radioText: {
    color: "#fff",
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: "#FFA500",
    padding: 20,
    borderRadius: 50,
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    marginBottom: 15,
    fontSize: 16,
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "#FFA500",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
  },
  modalButtonText: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default RegisterScreen;
