import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Bar as ProgressBar } from 'react-native-progress';

const Ball = ({ number, backgroundColor }) => {
  return (
    <View style={[styles.ball, { backgroundColor }]}>
      <Text style={styles.ballText}>{number}</Text>
    </View>
  );
};

const Tab1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Olá, João Marcos</Text>

      <ScrollView>
        <View style={styles.progressSection}>
          <Text style={styles.sectionTitle}>Meu Treino</Text>
          <Text style={styles.subTitle}>Progresso</Text>
          <View style={styles.progressRow}>
            <Text style={styles.progressText}>90%</Text>
            <Text style={styles.progressText}>Dias de treino 23/25</Text>
          </View>
          <ProgressBar 
            progress={0.90} 
            width={null} 
            color="#FFA500" 
            style={styles.progressBar} 
          />
        </View>

        <View style={styles.nextWorkoutSection}>
          <Text style={styles.sectionTitle}>Próximo treino:</Text>
          <Text style={styles.workoutDetail}>Quarta-Feira: pernas (ou seja, descanso)</Text>
          <Text style={styles.link}>→ Ver meus treinos</Text>
        </View>

        {/* Seção Sua Rotina */}
        <View style={styles.routineSection}>
          <Text style={styles.sectionTitle}>Sua rotina</Text>
          <View style={styles.routineDetails}>
            <View style={styles.routineItem}>
              <Ball number={2} backgroundColor="#000" />
              <Text style={styles.routineText}>Dias de treino consecutivos</Text>
            </View>
            <View style={styles.routineItem}>
              <Ball number={1} backgroundColor="#000" />
              <Text style={styles.routineText}>Dias descansando</Text>
            </View>
          </View>
        </View>

        <View style={styles.monthSection}>
        <Text style={styles.sectionTitle}>No último mês</Text>
          <View style={styles.routineDetails}>
            <View style={styles.routineItem}>
              <Ball number={18} backgroundColor="#FFA500" />
              <Text style={styles.routineText}>Treinos realizados</Text>
            </View>
            <View style={styles.routineItem}>
              <Ball number={4} backgroundColor="#FFA500" />
              <Text style={styles.routineText}>Dias seguidos treinando</Text>
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
    color: '#000',
    backgroundColor: '#FFA500',
    width: '100%',
    paddingVertical: 10,
    paddingTop: 90,
    paddingLeft: 20,
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
    color: '#FFA500',
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
    flex: 1, // Adicionado para equalizar o espaço
    justifyContent: 'center', // Centralizando verticalmente
  },
  ball: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5, // Espaço entre a bola e o texto
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
