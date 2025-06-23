import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

export default function WelcomeScreen({ navigation }) {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    loadUserName();
  }, []);

  const loadUserName = async () => {
    try {
      const name = await AsyncStorage.getItem('userName');
      if (name) {
        setUserName(name);
      }
    } catch (error) {
      console.error('Erro ao carregar nome:', error);
    }
  };

  const handleStart = () => {
    navigation.replace('Main');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Bem-vindo, {userName}!</Text>
          <Text style={styles.subtitle}>
            Vamos começar sua jornada fitness
          </Text>
        </View>

        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <Ionicons name="fitness" size={32} color="#FF6B6B" />
            <Text style={styles.featureTitle}>Treinos Personalizados</Text>
            <Text style={styles.featureDescription}>
              Exercícios adaptados ao seu nível e objetivos
            </Text>
          </View>

          <View style={styles.featureItem}>
            <Ionicons name="trophy" size={32} color="#FF6B6B" />
            <Text style={styles.featureTitle}>Metas Atingíveis</Text>
            <Text style={styles.featureDescription}>
              Acompanhe seu progresso e celebre suas conquistas
            </Text>
          </View>

          <View style={styles.featureItem}>
            <Ionicons name="calendar" size={32} color="#FF6B6B" />
            <Text style={styles.featureTitle}>Agenda Flexível</Text>
            <Text style={styles.featureDescription}>
              Treine no seu próprio ritmo e horário
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.startButton} onPress={handleStart}>
          <Text style={styles.startButtonText}>Começar Agora</Text>
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
  content: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
  featuresContainer: {
    marginBottom: 40,
  },
  featureItem: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 10,
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  startButton: {
    backgroundColor: '#FF6B6B',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
}); 