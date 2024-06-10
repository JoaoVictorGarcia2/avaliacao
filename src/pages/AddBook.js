import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

const AddBook = ({ route, navigation }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [ano, setAno] = useState('');
  const [genero, setGenero] = useState('');
  const [descricao, setDescricao] = useState('');

  const { setBooks } = route.params;

  const handleSaveBook = () => {
    if (title && author && ano && genero && descricao) {
      setBooks((prevBooks) => [
        ...prevBooks,
        { title, author, ano, genero, descricao },
      ]);
      Alert.alert('Sucesso', 'Livro adicionado ocm sucesso!');
      navigation.goBack();
    } else {
      Alert.alert('Erro', 'Confira se todos os campos estão preenchidos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Info sobre o livro</Text>
      <TextInput
        style={styles.input}
        placeholder="Titulo"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Autor"
        value={author}
        onChangeText={setAuthor}
      />
      <TextInput
        style={styles.input}
        placeholder="Ano de publicação"
        value={ano}
        onChangeText={setAno}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Genero"
        value={genero}
        onChangeText={setGenero}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
      <Button title="Adicionar livro" onPress={handleSaveBook} color="#6200ee" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    color: '#6200ee',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});

export default AddBook;
