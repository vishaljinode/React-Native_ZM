import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
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
        <Button
          title="Search"
          onPress={() => Alert.alert('Simple Search Button pressed')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: 'pink',
    height: 50,
    flexDirection: 'row',  // Ensures horizontal layout
    alignItems: 'center',  // Vertically center elements
    borderColor: 'black',
    borderWidth: 2,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '70%',  // Takes up 70% of the container width
  },
  searchButton: {
    width: '20%',  // Button takes up 20% of the container width
    height: 40,
  }
});