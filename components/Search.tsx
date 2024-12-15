import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function Search(props: any) {
  const [text, onChangeText] = React.useState('');

  const handleSearch = () => {
    if (text.trim()) {
      // If there is some text, pass the search term to the mySearch function
      props.mySearch(text);
    } else {
      // If search is empty, pass 'all' to show all books
      props.mySearch('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search books..."
        accessibilityLabel="Search input field"
        accessibilityHint="Enter a book title to search"
      />

      <TouchableOpacity style={styles.searchButton} onPress={handleSearch} accessibilityLabel="Search button">
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: 'white',
    height: 50,
    flexDirection: 'row',  // Ensures horizontal layout
    alignItems: 'center',  // Vertically center elements
    justifyContent: 'space-between',  // Add some spacing between the input and button
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '70%',  // Takes up 70% of the container width
    borderRadius: 5,
  },
  searchButton: {
    width: '22%',  // Button takes up 20% of the container width
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
