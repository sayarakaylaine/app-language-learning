import React, { useState, useEffect } from 'react'; 
import { View, Text, Button, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper'; // Importando ProgressBar

const QuizScreen = ({ navigation }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // Timer para cada questão

  const questions = [
    { question: 'Qual é a capital da França?', options: ['Paris', 'Londres', 'Roma'], answer: 'Paris' },
    { question: 'Qual é o idioma oficial do Brasil?', options: ['Inglês', 'Espanhol', 'Português'], answer: 'Português' },
    // Adicione mais perguntas aqui
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // Limpar intervalo quando o componente for desmontado
  }, []);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[questionIndex].answer) {
      setScore(score + 1);
    }
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setTimeLeft(30); // Reseta o timer para a próxima pergunta
    } else {
      alert(`Fim do Quiz! Você acertou ${score + 1} de ${questions.length} questões.`);
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{questions[questionIndex].question}</Text>
      {questions[questionIndex].options.map((option, index) => (
        <Button key={index} title={option} onPress={() => handleAnswer(option)} />
      ))}
      <Text style={styles.timer}>Tempo restante: {timeLeft}s</Text>
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>{questionIndex + 1} de {questions.length}</Text>
        <ProgressBar progress={(questionIndex + 1) / questions.length} style={styles.progressBar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
  },
  timer: {
    fontSize: 16,
    marginTop: 10,
    color: 'red',
  },
  progressContainer: {
    marginTop: 20,
    width: '80%',
  },
  progressText: {
    textAlign: 'center',
  },
  progressBar: {
    marginTop: 10,
    height: 10,
    width: '100%',
  },
});

export default QuizScreen;
