import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ route, navigation }) => {
  const { username } = route.params; // Pegando o nome do usuário

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo, {username}!</Text> {/* Mostrando o nome do usuário */}
      <Button title="Iniciar Quiz" onPress={() => navigation.navigate('Quiz')} />
      <Button title="Ver Conquistas" onPress={() => navigation.navigate('Conquistas', { username })} /> {/* Passando o nome para Conquistas */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
