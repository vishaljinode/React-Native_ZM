import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function Search() {
  const [text, onChangeText] = React.useState('Useless Text');

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />

        <TouchableOpacity style={styles.searchButton}
          onPress={() => Alert.alert('Simple Search Button pressed')}
        >
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
    // borderColor: 'black',
    // borderWidth: 2,
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
