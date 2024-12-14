import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { API_BASE_URL } from '../Api_urls.js';
import { RootStackParamList } from '../types'; 
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define types for Book
interface Book {
  _id: string;
  title: string;
}

const BookIndex = ({ route }: any) => {
  const { bookId } = route.params;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  // Use the typed useNavigation hook
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'BookIndex'>>();

  useEffect(() => {
    fetchIndex();
  }, []);

  const fetchIndex = async () => {
    setLoading(true);
    setError(null); // Reset error state before making a new request
    try {
      const response = await fetch(`${API_BASE_URL}/book/gettitlesByBookId`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bookId: bookId }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }

      const json = await response.json();
      setData(json.book); // Update state with fetched data
    } catch (error: any) {
      setError(error.message); // Set error message in state
      console.error('Failed to fetch books:', error);
    } finally {
      setLoading(false); // Stop loading spinner after fetch completes
    }
  };

  const renderBooks = () => {
    if (loading) {
      return (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.centered}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      );
    }

    if (!data || data.length === 0) {
      return (
        <View style={styles.centered}>
          <Text>No books found.</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {data.map((item) => (
          <TouchableOpacity
            style={styles.item}
            key={item._id}
            onPress={() => navigation.navigate('Story', { storyId: item._id })} // TypeScript will now allow this
          >
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {renderBooks()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    padding: 16,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BookIndex;