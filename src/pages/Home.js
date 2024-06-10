import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, Alert } from 'react-native';

const Home = ({ navigation }) => {
  const [books, setBooks] = useState([]);

  const handleDeleteBook = (index) => {
    const newBooks = [...books];
    newBooks.splice(index, 1);
    setBooks(newBooks);
    Alert.alert('Success', 'Book deleted successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Books</Text>
      <FlatList
        data={books}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.bookContainer}>
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text>Author: {item.author}</Text>
            <Text>Year: {item.year}</Text>
            <Text>Genre: {item.genre}</Text>
            <Text>Description: {item.description}</Text>
            <Button
              title="Delete Book"
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
