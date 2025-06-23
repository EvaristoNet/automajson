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

const tips = [
  {
    id: 1,
    title: 'O que comer antes do treino',
    icon: 'nutrition',
    content: [
      'Consuma carboidratos complexos 2-3 horas antes',
      'Evite alimentos gordurosos',
      'Mantenha-se hidratado',
    ],
  },
  {
    id: 2,
    title: 'Como evitar dores',
    icon: 'medkit',
    content: [
      'Faça aquecimento adequado',
      'Mantenha a postura correta',
      'Respeite seus limites',
    ],
  },
  {
    id: 3,
    title: 'Dicas para manter a disciplina',
    icon: 'trophy',
    content: [
      'Estabeleça horários fixos',
      'Comece com metas pequenas',
      'Celebre suas conquistas',
    ],
  },
];

export default function TipsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Dicas Extras</Text>
        </View>

        <View style={styles.tipsContainer}>
          {tips.map((tip) => (
            <TouchableOpacity
              key={tip.id}
              style={styles.tipCard}
              onPress={() => navigation.navigate('Exercise', { tip })}
            >
              <View style={styles.tipHeader}>
                <Ionicons name={tip.icon} size={24} color="#FF6B6B" />
                <Text style={styles.tipTitle}>{tip.title}</Text>
              </View>
              <View style={styles.tipContent}>
                {tip.content.map((item, index) => (
                  <Text key={index} style={styles.tipText}>
                    • {item}
                  </Text>
                ))}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.contactContainer}>
          <Text style={styles.contactTitle}>Precisa de ajuda?</Text>
          <TouchableOpacity
            style={styles.contactButton}
            onPress={() => navigation.navigate('Exercise', { screen: 'Contact' })}
          >
            <Ionicons name="mail" size={24} color="#fff" />
            <Text style={styles.contactButtonText}>Fale Conosco</Text>
          </TouchableOpacity>
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
  tipsContainer: {
    padding: 20,
  },
  tipCard: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
  },
  tipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginLeft: 10,
  },
  tipContent: {
    marginLeft: 34,
  },
  tipText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    lineHeight: 24,
  },
  contactContainer: {
    padding: 20,
    alignItems: 'center',
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  contactButton: {
    flexDirection: 'row',
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
}); 