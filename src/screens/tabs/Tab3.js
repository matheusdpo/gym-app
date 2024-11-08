import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Share } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab3 = ({ navigation }) => {
  const [weekProgress, setWeekProgress] = useState([true, false, true, true, false, true, false]);
  const daysOfWeek = ["S", "T", "W", "T", "F", "S", "S"];

  const toggleWorkoutDay = (index) => {
    const updatedProgress = [...weekProgress];
    updatedProgress[index] = !updatedProgress[index];
    setWeekProgress(updatedProgress);
  };

  const navigateToPage = (page) => {
    if (page === "Invite a Friend") {
      shareInviteMessage();
    } else {
      navigation.navigate(page);
    }
  };

  const shareInviteMessage = async () => {
    try {
      const result = await Share.share({
        message: "Hey! Join me on this amazing fitness app to track our progress together!",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("Shared with activity type: ", result.activityType);
        } else {
          console.log("Shared successfully");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Share dismissed");
      }
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("./img/background.jpg")} style={styles.backgroundImage} />
      <View style={styles.overlay} />

      <Image source={require("./img/cr7.jpg")} style={styles.profileImage} />
      <Text style={styles.userName}>Cristiano Ronaldo</Text>
      <Text style={styles.memberSince}>Member Since: 2024</Text>

      {/* Conteúdo rolável */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.progressTitle}>Your Week Progress</Text>
        <View style={styles.weekContainer}>
          {weekProgress.map((workedOut, index) => (
            <TouchableOpacity key={index} onPress={() => toggleWorkoutDay(index)} style={styles.dayCircleContainer}>
              <View style={[styles.dayCircle, { backgroundColor: workedOut ? "#175287" : "#ccc" }]} />
              <Text style={styles.dayText}>{daysOfWeek[index]}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.optionsContainer}>
          {["Account", "Privacy", "Payments", "Invite a Friend"].map((item, index) => (
            <TouchableOpacity key={index} style={styles.optionItem} onPress={() => navigateToPage(item)}>
              <Text style={styles.optionText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "30%",
    resizeMode: "cover",
    opacity: 0.5,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#175287",
    position: "absolute",
    top: "23.5%",
    alignSelf: "center",
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    marginTop: "75%",
    marginBottom: 10,
  },
  memberSince: {
    fontSize: 10,
    color: "#FFF",
    marginTop: "0%",
    marginBottom: "3%",
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 0, // Para dar espaço no final do scroll
  },
  progressTitle: {
    fontSize: 18,
    color: "#FFF",
    marginBottom: 5,
  },
  weekContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dayCircleContainer: {
    alignItems: "center",
    marginHorizontal: 6,
  },
  dayCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginBottom: 5,
  },
  dayText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  optionsContainer: {
    marginTop: 30,
    width: "85%",
  },
  optionItem: {
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  optionText: {
    color: "#FFF",
    fontSize: 16,
  },
});

export default Tab3;
