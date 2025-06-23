import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const relaxationContent = {
  music: [
    {
      id: 1,
      title: 'Música Relaxante 1',
      duration: '5:00',
      type: 'Música',
    },
    {
      id: 2,
      title: 'Música Relaxante 2',
      duration: '4:30',
      type: 'Música',
    },
  ],
  meditation: [
    {
      id: 1,
      title: 'Meditação Guiada',
      duration: '10:00',
      type: 'Meditação',
    },
    {
      id: 2,
      title: 'Respiração Profunda',
      duration: '5:00',
      type: 'Meditação',
    },
  ],
  stretching: [
    {
      id: 1,
      title: 'Alongamento Completo',
      duration: '8:00',
      type: 'Alongamento',
    },
    {
      id: 2,
      title: 'Alongamento Rápido',
      duration: '5:00',
      type: 'Alongamento',
    },
  ],
};

export default function RelaxationScreen({ navigation }) {
  const renderContentCard = (item) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.contentCard}
        onPress={() => navigation.navigate('Exercise', { item })}
      >
        <View style={styles.contentInfo}>
          <Text style={styles.contentTitle}>{item.title}</Text>
          <Text style={styles.contentDuration}>{item.duration}</Text>
        </View>
        <TouchableOpacity style={styles.playButton}>
          <Ionicons name="play" size={24} color="#fff" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Relaxamento</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="musical-notes" size={24} color="#FF6B6B" />
            <Text style={styles.sectionTitle}>Músicas</Text>
          </View>
          {relaxationContent.music.map(renderContentCard)}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="leaf" size={24} color="#FF6B6B" />
            <Text style={styles.sectionTitle}>Meditações</Text>
          </View>
          {relaxationContent.meditation.map(renderContentCard)}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="body" size={24} color="#FF6B6B" />
            <Text style={styles.sectionTitle}>Alongamentos</Text>
          </View>
          {relaxationContent.stretching.map(renderContentCard)}
        </View>

        <View style={styles.tipsContainer}>
          <Text style={styles.tipsTitle}>Dicas de Relaxamento</Text>
          <Text style={styles.tipText}>
            • Respire profundamente por 5 minutos
          </Text>
          <Text style={styles.tipText}>
            • Mantenha-se hidratado após o treino
          </Text>
          <Text style={styles.tipText}>
            • Faça alongamentos suaves
          </Text>
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
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginLeft: 10,
  },
  contentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 15,
    borderRadius: 12,
  },
  contentInfo: {
    flex: 1,
  },
  contentTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  contentDuration: {
    fontSize: 14,
    color: '#666',
  },
  playButton: {
    backgroundColor: '#FF6B6B',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tipsContainer: {
    backgroundColor: '#f8f8f8',
    margin: 20,
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