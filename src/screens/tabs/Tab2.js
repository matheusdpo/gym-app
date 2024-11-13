import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, TextInput, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import moment from "moment";

const Tab2 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [newWorkoutName, setNewWorkoutName] = useState("");
  const [newWorkoutDay, setNewWorkoutDay] = useState(""); // Armazena o dia da semana escolhido
  const [workouts, setWorkouts] = useState([]);
  const [workoutLetter, setWorkoutLetter] = useState(""); // Armazena a letra do treino

  const currentDay = moment().day();

  // Função para formatar data e hora
  const formatDate = () => {
    const currentDate = new Date();
    const dateFormat = "DD [de] MMMM [de] YYYY"; 
    const timeFormat = "hh:mm A";
    const time24HourFormat = "HH:mm";

    const formattedDate = moment(currentDate).format(dateFormat);
    const formattedTime = moment(currentDate).format(
      moment().format("A") ? timeFormat : time24HourFormat
    );
    return `${formattedDate}\n${formattedTime}`;
  };

  // Função para adicionar novo treino
  const addWorkout = () => {
    if (newWorkoutName && workoutLetter && newWorkoutDay) {
      const newWorkout = {
        letter: workoutLetter,
        name: newWorkoutName,
        day: newWorkoutDay,
      };
      setWorkouts([...workouts, newWorkout]);
      setNewWorkoutName("");
      setWorkoutLetter("");
      setNewWorkoutDay("");
      setCreateModalVisible(false);
    }
  };

  // Função para fechar o modal
  const closeModal = () => {
    setCreateModalVisible(false);
    setWorkoutLetter("");
    setNewWorkoutDay("");
    setNewWorkoutName("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Workout</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon name="calendar" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.createButton} onPress={() => setCreateModalVisible(true)}>
        <Text style={styles.createButtonText}>Create Workout</Text>
      </TouchableOpacity>

      <ScrollView style={styles.workoutList}>
        {workouts.map((workout, index) => (
          <View key={index} style={styles.workoutButton}>
            <Text style={styles.workoutLetter}>{workout.letter}</Text>
            <Text style={styles.workoutName}>{workout.name}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.calendarHeader}>Weekly Workout Schedule</Text>
      <View style={styles.calendar}>
        {["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"].map((day, index) => (
          <View key={index} style={styles.calendarItem}>
            <Text style={styles.dayText}>{day}</Text>
            <View
              style={[
                styles.workoutLetterCircle,
                currentDay === index && styles.activeDay,
              ]}
            >
              
              <Text style={styles.calendarWorkoutLetter}>
                {workouts.find(w => w.day === day) ? workouts.find(w => w.day === day).letter : "-"}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* Modal para exibir data e hora */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainerHora}>
            <Text style={styles.modalText}>{formatDate()}</Text>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.confirmButtonText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal para criar um novo treino */}
      <Modal
        visible={createModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
        >
          <View style={styles.modalContainerTreino} onTouchStart={(e) => e.stopPropagation()}>
            <Text style={styles.modalTitle}>Criar Novo Treino</Text>
            <Text style={styles.modalSubtitle}>Escolha a letra, nome e dia do treino:</Text>

            {/* Radio Buttons para escolher a letra A-G */}
            <Text style={styles.inputLabel}>Escolha a Letra</Text>
            <View style={styles.radioButtonContainer}>
              {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                <TouchableOpacity
                  key={letter}
                  style={[
                    styles.radioButton,
                    workoutLetter === letter && styles.selectedRadioButton,
                  ]}
                  onPress={() => setWorkoutLetter(letter)}
                >
                  <Text style={[styles.radioButtonText, workoutLetter == letter && styles.selectedRadioButtonText]}>{letter}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Input para nome do treino */}
            <Text style={styles.inputLabel}>Nome do Treino</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome do Treino"
              value={newWorkoutName}
              onChangeText={setNewWorkoutName}
            />
            
            {/* Radio Buttons para escolher o dia da semana */}
            <Text style={styles.inputLabel}>Escolha o Dia</Text>
            <View style={styles.radioButtonContainer}>
              {["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"].map((day) => (
                <TouchableOpacity
                  key={day}
                  style={[
                    styles.radioButton,
                    newWorkoutDay === day && styles.selectedRadioButton,
                  ]}
                  onPress={() => setNewWorkoutDay(day)}
                >
                  <Text style={[styles.radioButtonText, day == newWorkoutDay && styles.selectedRadioButtonText]}>{day}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.modalActions}>
              <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.confirmButton} onPress={addWorkout}>
                <Text style={styles.confirmButtonText}>Adicionar Treino</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
  },
  createButton: {
    backgroundColor: "#175287", // Cor azul como padrão
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 40,
  },
  createButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  workoutList: {
    marginBottom: 20,
  },
  workoutButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 5,
    borderColor: "#fff",
    borderRadius: 100,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  workoutLetter: {
    color: "#175287", // Cor azul como padrão
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  workoutName: {
    color: "#000",
    fontSize: 15,
    flex: 1,
    paddingLeft: 40,
  },
  dayText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
  },
  arrow: {
    color: "#000",
    fontSize: 18,
    marginLeft: 5,
  },
  calendarHeader: {
    color: "#fff",
    fontSize: 20,
    marginTop: 30,
    marginBottom: 10,
    fontWeight: "bold",
  },
  calendar: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  calendarItem: {
    width: "13%",
    alignItems: "center",
    marginBottom: 10,
  },
  workoutLetterCircle: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: "#175287",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },

  calendarWorkoutLetter: {
    color: "#FFF",
    fontWeight: "bold",
  },
  activeDay: {
    backgroundColor: 'red',
    color: "#175287",
  },
  dateText: {
    color: "#fff",
    fontSize: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainerTreino: {
    backgroundColor: "#fff",
    padding: 20,
    width: "90%",
    borderRadius: 10,
  },
  modalContainerHora: {
    backgroundColor: "#fff",
    padding: 20,
    width: "60%",
    borderRadius: 15,
  },
  modalText:{
    fontSize: 15,
    color: "#000",
    textAlign: "center",
    paddingBottom: 15,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  modalSubtitle: {
    fontSize: 14,
    color: "#000",
    marginVertical: 10,
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  radioButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  radioButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedRadioButton: {
    backgroundColor: "#175287",
  },
  selectedRadioButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  radioButtonText: {
    color: "#000",
  },
  radioButtonTextSelected: {
    color: "#fff",
    fontWeight: "bold",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    width: "48%",
  },
  cancelButtonText: {
    color: "#000",
    textAlign: "center",
  },
  confirmButton: {
    backgroundColor: "#175287",
    padding: 10,
    borderRadius: 5,
    width: "50%",
    alignSelf: "center", // Centraliza o botão no contêiner pai
},
  confirmButtonText: {
    color: "#fff",
    textAlign: "center",
  },

});

export default Tab2;
