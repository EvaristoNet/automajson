import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ExerciseScreen({ route, navigation }) {
  const { workout } = route.params;
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'Preparação',
      description: 'Posicione-se corretamente e respire fundo',
      duration: 5,
    },
    {
      title: 'Execução',
      description: 'Faça 3 séries de 15 repetições, descansando 30 segundos entre elas',
      duration: 300,
    },
    {
      title: 'Finalização',
      description: 'Respire fundo e relaxe',
      duration: 5,
    },
  ];

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => {
          if (time >= steps[currentStep].duration) {
            if (currentStep < steps.length - 1) {
              setCurrentStep(currentStep + 1);
              return 0;
            } else {
              setIsActive(false);
              return 0;
            }
          }
          return time + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, currentStep]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.title}>{workout.title}</Text>
        </View>

        <View style={styles.imageContainer}>
          <View style={styles.placeholderContainer}>
            <Ionicons name="fitness" size={64} color="#FF6B6B" />
            <Text style={styles.placeholderText}>Ilustração do Exercício</Text>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>{steps[currentStep].title}</Text>
            <Text style={styles.stepDescription}>
              {steps[currentStep].description}
            </Text>
          </View>

          <View style={styles.timerContainer}>
            <Text style={styles.timerText}>{formatTime(time)}</Text>
            <Text style={styles.timerLabel}>
              {isActive ? 'Em andamento' : 'Pronto para começar'}
            </Text>
          </View>

          <TouchableOpacity
            style={[styles.startButton, isActive && styles.stopButton]}
            onPress={() => setIsActive(!isActive)}
          >
            <Text style={styles.startButtonText}>
              {isActive ? 'Pausar' : 'Iniciar Agora'}
            </Text>
          </TouchableOpacity>

          <View style={styles.tipsContainer}>
            <Text style={styles.tipsTitle}>Dicas de Execução</Text>
            <Text style={styles.tipText}>
              • Mantenha a respiração constante durante o exercício
            </Text>
            <Text style={styles.tipText}>
              • Execute os movimentos de forma controlada
            </Text>
            <Text style={styles.tipText}>
              • Não force além do seu limite
            </Text>
          </View>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  imageContainer: {
    width: '100%',
    height: 250,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderContainer: {
    alignItems: 'center',
  },
  placeholderText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  content: {
    padding: 20,
  },
  stepContainer: {
    marginBottom: 30,
  },
  stepTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  stepDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  timerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  timerLabel: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  startButton: {
    backgroundColor: '#FF6B6B',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 30,
  },
  stopButton: {
    backgroundColor: '#666',
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  tipsContainer: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderRadius: 12,
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  tipText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    lineHeight: 24,
  },
}); 