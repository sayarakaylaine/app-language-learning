import React, { useState } from 'react'; 
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username) {
      // Passando o nome do usuário para a HomeScreen
      navigation.navigate('Home', { username });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Language Learning!</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    padding: 10,
    marginBottom: 20,
  },
});

export default LoginScreen;
