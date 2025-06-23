import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const workouts = [
  {
    id: 1,
    title: 'Treino de Abdômen',
    duration: '15 min',
    level: 'Iniciante',
    icon: 'fitness',
  },
  {
    id: 2,
    title: 'Treino de Braços',
    duration: '20 min',
    level: 'Intermediário',
    icon: 'barbell',
  },
  {
    id: 3,
    title: 'Treino de Pernas',
    duration: '25 min',
    level: 'Avançado',
    icon: 'walk',
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Treinos</Text>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="filter" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        <View style={styles.workoutsContainer}>
          {workouts.map((workout) => (
            <TouchableOpacity
              key={workout.id}
              style={styles.workoutCard}
              onPress={() => navigation.navigate('Exercise', { workout })}
            >
              <View style={styles.workoutIcon}>
                <Ionicons name={workout.icon} size={32} color="#FF6B6B" />
              </View>
              <View style={styles.workoutInfo}>
                <Text style={styles.workoutTitle}>{workout.title}</Text>
                <View style={styles.workoutDetails}>
                  <Text style={styles.workoutDetail}>
                    <Ionicons name="time-outline" size={16} color="#666" />{' '}
                    {workout.duration}
                  </Text>
                  <Text style={styles.workoutDetail}>
                    <Ionicons name="fitness-outline" size={16} color="#666" />{' '}
                    {workout.level}
                  </Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#666" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  filterButton: {
    padding: 8,
  },
  workoutsContainer: {
    marginTop: 10,
  },
  workoutCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  workoutIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF5F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  workoutInfo: {
    flex: 1,
  },
  workoutTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  workoutDetails: {
    flexDirection: 'row',
  },
  workoutDetail: {
    fontSize: 14,
    color: '#666',
    marginRight: 15,
  },
}); 