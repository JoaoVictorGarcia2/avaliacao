import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, Alert } from 'react-native';

const Home = ({ navigation }) => {
  const [books, setBooks] = useState([]);

  const handleDeleteBook = (index) => {
    const newBooks = [...books];
    newBooks.splice(index, 1);
    setBooks(newBooks);
    Alert.alert('Sucesso', 'Livro deletado com seucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus livros salvos</Text>
      <FlatList
        data={books}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.bookContainer}>
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text>Autor: {item.author}</Text>
            <Text>Ano: {item.year}</Text>
            <Text>Genero: {item.genre}</Text>
            <Text>Descrição: {item.description}</Text>
            <Button
              title="Remover livro"
              onPress={() => handleDeleteBook(index)}
              color="#ff0000"
            />
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddBook', { setBooks })}
      >
        <Text style={styles.addButtonText}>Adicionar um novo livro</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginTop: 50,
    marginBottom: 20,
    color: '#6200ee',
    textAlign: 'center',
  },
  bookContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 10,
    borderRadius: 5,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#6200ee',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Home;
