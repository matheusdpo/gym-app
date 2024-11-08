import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { Bar as ProgressBar } from 'react-native-progress';

const Ball = ({ number, backgroundColor }) => {
  return (
    <View style={[styles.ball, { backgroundColor }]}>
      <Text style={styles.ballText}>{number}</Text>
    </View>
  );
};

const Tab1= ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Hello, Cristiano Ronaldo</Text>
      
      {/* Linha vermelha abaixo do título */}
      <View style={styles.redLine} />

      <ScrollView>
        <View style={styles.progressSection}>
          <Text style={styles.sectionTitle}>My Workout</Text>
          <Text style={styles.subTitle}>Progress</Text>
          <View style={styles.progressRow}>
            <Text style={styles.progressText}>90%</Text>
            <Text style={styles.progressText}>Workout days 23/25</Text>
          </View>
          <ProgressBar 
            progress={0.90} 
            width={null} 
            color="#175287" 
            style={styles.progressBar} 
          />
        </View>

        <View style={styles.nextWorkoutSection}>
          <Text style={styles.sectionTitle}>Next workout:</Text>
          <Text style={styles.workoutDetail}>Wednesday: Legs</Text>
          <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Tab2')}>
          <Text style={styles.link}>→ See my workouts</Text>
          </TouchableOpacity>
        </View>

        {/* Your Routine Section */}
        <View style={styles.routineSection}>
          <Text style={styles.sectionTitle}>Your routine</Text>
          <View style={styles.routineDetails}>
            <View style={styles.routineItem}>
              <Ball number={2} backgroundColor="#000" />
              <Text style={styles.routineText}>Consecutive workout days</Text>
            </View>
            <View style={styles.routineItem}>
              <Ball number={1} backgroundColor="#000" />
              <Text style={styles.routineText}>Rest days</Text>
            </View>
          </View>
        </View>

        <View style={styles.monthSection}>
          <Text style={styles.sectionTitle}>In the last month</Text>
          <View style={styles.routineDetails}>
            <View style={styles.routineItem}>
              <Ball number={18} backgroundColor="#175287" />
              <Text style={styles.routineText}>Workouts completed</Text>
            </View>
            <View style={styles.routineItem}>
              <Ball number={4} backgroundColor="#175287" />
              <Text style={styles.routineText}>Consecutive workout days</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#000',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#fff',
    backgroundColor: '#175287',
    width: '100%',
    paddingVertical: 10,
    paddingTop: 90,
    paddingLeft: 20,
  },
  // Estilo para a linha vermelha
  redLine: {
    width: '100%',
    height: 2,
    backgroundColor: 'red',
  },
  progressSection: {
    marginTop: 40,
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  subTitle: {
    color: '#ccc',
    marginTop: 5,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  progressText: {
    fontSize: 12,
    color: '#fff',
  },
  progressBar: {
    marginTop: 5,
    height: 10,
    borderRadius: 5,
  },
  nextWorkoutSection: {
    marginTop: 20,
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  workoutDetail: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  link: {
    color: '#175287',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  routineSection: {
    marginTop: 20,
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  routineDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  routineItem: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  ball: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  ballText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  routineText: {
    color: '#fff',
    textAlign: 'center',
  },
  monthSection: {
    marginTop: 20,
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  monthDetail: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
});
export default Tab1;
  
