import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const QuizScreen = ({ navigation }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    { question: 'Qual é a capital da França?', options: ['Paris', 'Londres', 'Roma'], answer: 'Paris' },
    { question: 'Qual é o idioma oficial do Brasil?', options: ['Inglês', 'Español', 'Português'], answer: 'Português' },
  ];

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[questionIndex].answer) {
      setScore(score + 1);
    }
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
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
});

export default QuizScreen;
