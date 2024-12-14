import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function Search(props: any) {
  const [text, onChangeText] = React.useState('');

  const handleSearch = () => {
    // if (text.trim()) {
      // Call the mySearch function passed via props and pass the text value
      props.mySearch(text);
    // } else {
    //   // Show an alert if the search text is empty
    //   Alert.alert('Please enter a search term');
    // }
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder='Search books...'
        />

        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
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
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 5,
    width: '70%',  // Takes up 70% of the container width
  },
  searchButton: {
    width: '22%',  // Button takes up 20% of the container width
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 5
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
