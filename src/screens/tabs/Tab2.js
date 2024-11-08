import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import moment from "moment";

const Tab2 = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const workouts = [
    { letter: "A", name: "Peitos e Tríceps" },
    { letter: "B", name: "Costas e Bíceps" },
    { letter: "C", name: "Pernas" },
    { letter: "D", name: "Ombros e Antebraços" },
  ];

  const currentDay = moment().day();

  // Formata a data e hora atual
  const formatDate = () => {
    const currentDate = new Date();
    const dateFormat = "DD [de] MMMM [de] YYYY"; // Formato: 01 de Janeiro de 2000
    const timeFormat = "hh:mm:ss A"; // Formato 12h com AM/PM
    const time24HourFormat = "HH:mm:ss"; // Formato 24h

    const formattedDate = moment(currentDate).format(dateFormat);
    const formattedTime = moment(currentDate).format(
      moment().format("A") ? timeFormat : time24HourFormat
    );
    return `${formattedDate}\n${formattedTime}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Workout</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon name="calendar" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>Create Workout</Text>
      </TouchableOpacity>

      <ScrollView style={styles.workoutList}>
        {workouts.map((workout) => (
          <TouchableOpacity key={workout.letter} style={styles.workoutButton}>
            <Text style={styles.workoutLetter}>{workout.letter}</Text>
            <Text style={styles.workoutName}>{workout.name}</Text>
            <Text style={styles.arrow}> &gt; </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.calendarHeader}>Weekly Workout Schedule</Text>
      <View style={styles.calendar}>
        {["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"].map((day, index) => (
          <View key={index} style={styles.calendarItem}>
            <Text style={styles.dayText}>{day}</Text>
            <Text style={styles.dateText}>{index + 1}</Text>
            <View
              style={[
                styles.workoutLetterCircle,
                currentDay === index && styles.activeDay,
              ]}
            >
              <Text style={styles.calendarWorkoutLetter}>
                {workouts[index] ? workouts[index].letter : "-"}
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
          <View style={styles.modalContainer}>
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
    backgroundColor: "#175287",
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
    color: "#175287",
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
  arrow: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  calendarHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 10,
  },
  calendar: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    backgroundColor: "#000",
    borderRadius: 10,
    padding: 0,
  },
  calendarItem: {
    width: "13%",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 10,
    paddingVertical: 12,
    margin: 0,
    elevation: 2,
  },
  dayText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  dateText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  calendarWorkoutLetter: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  workoutLetterCircle: {
    marginTop: 5,
    backgroundColor: "#444",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  activeDay: {
    backgroundColor: "#175287",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
    color: "#000",
  },
  confirmButton: {
    backgroundColor: "#175287",
    padding: 10,
    borderRadius: 5,
  },
  confirmButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default Tab2;
