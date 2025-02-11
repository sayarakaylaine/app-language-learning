import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ConquistasScreen = ({ route }) => {
  const { username } = route.params; // Pegando o nome do usuário passado da HomeScreen

  const [level, setLevel] = React.useState(2); // Exemplo de progresso
  const [conquests] = React.useState([
    { title: "Iniciante", description: "Complete o primeiro quiz.", achieved: true },
    { title: "Intermediário", description: "Acertou 10 perguntas.", achieved: false },
    { title: "Avançado", description: "Complete todos os quizzes disponíveis.", achieved: false },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conquistas de {username}</Text>
      <Text style={styles.level}>Nível: {level}</Text>

      {/* Colocando o título dentro de uma View com estilo ajustado */}
      <View style={styles.conquestTitleContainer}>
        <Text style={styles.conquestTitle}>Conquistas:</Text>
      </View>

      {conquests.map((conquest, index) => (
        <View key={index} style={styles.conquestItem}>
          <Text style={[styles.conquestText, conquest.achieved && styles.achieved]}>
            {conquest.title}
          </Text>
          <Text style={styles.description}>{conquest.description}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  level: {
    fontSize: 18,
    marginBottom: 10,
  },
  conquestTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  conquestItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    width: '100%',
  },
  conquestText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginTop: 5,
  },
  achieved: {
    color: 'green', // Conquistas realizadas podem ter um estilo diferente
  },
  conquestTitleContainer: {
    width: '100%',
    alignItems: 'flex-start',
  },
  conquestTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default ConquistasScreen;
