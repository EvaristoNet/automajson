import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const goals = [
  {
    id: 1,
    title: 'Tonificar o abdômen',
    progress: 40,
    workouts: 12,
    totalWorkouts: 30,
  },
  {
    id: 2,
    title: 'Melhorar resistência',
    progress: 25,
    workouts: 8,
    totalWorkouts: 30,
  },
];

export default function GoalsScreen({ navigation }) {
  const renderProgressBar = (progress) => {
    return (
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Suas Metas</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Ionicons name="calendar" size={24} color="#FF6B6B" />
            <Text style={styles.statNumber}>20</Text>
            <Text style={styles.statLabel}>Dias de treino</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="flame" size={24} color="#FF6B6B" />
            <Text style={styles.statNumber}>1.2k</Text>
            <Text style={styles.statLabel}>Calorias queimadas</Text>
          </View>
        </View>

        <View style={styles.goalsContainer}>
          {goals.map((goal) => (
            <TouchableOpacity
              key={goal.id}
              style={styles.goalCard}
              onPress={() => navigation.navigate('Exercise', { goal })}
            >
              <View style={styles.goalHeader}>
                <Text style={styles.goalTitle}>{goal.title}</Text>
                <Text style={styles.goalProgress}>{goal.progress}%</Text>
              </View>
              {renderProgressBar(goal.progress)}
              <View style={styles.goalDetails}>
                <Text style={styles.goalDetail}>
                  {goal.workouts} de {goal.totalWorkouts} treinos completados
                </Text>
                <TouchableOpacity
                  style={styles.continueButton}
                  onPress={() => navigation.navigate('Exercise', { goal })}
                >
                  <Text style={styles.continueButtonText}>Continuar</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.addGoalButton}
          onPress={() => navigation.navigate('Welcome')}
        >
          <Ionicons name="add" size={24} color="#fff" />
          <Text style={styles.addGoalButtonText}>Adicionar Nova Meta</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderRadius: 12,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  goalsContainer: {
    padding: 20,
  },
  goalCard: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  goalProgress: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 15,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#FF6B6B',
    borderRadius: 4,
  },
  goalDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  goalDetail: {
    fontSize: 14,
    color: '#666',
  },
  continueButton: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  addGoalButton: {
    flexDirection: 'row',
    backgroundColor: '#FF6B6B',
    margin: 20,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addGoalButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
}); 