import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import Sliders from './components/Sliders';
import Buttons from './components/Buttons';
import Search from './components/Search';
import BookCard from './components/BookCard';
import BannerAdComponent from './components/BannerAd';
import { useNavigation } from '@react-navigation/native';
import { API_BASE_URL } from './Api_urls.js';

export default function App() {
  const adUnit = 'ca-app-pub-3940256099942544/6300978111'; // Test Ad ID

  const [getBannerVisibility, setBannerVisibility] = useState(true);
  const [books, setBooks] = useState<any>([]);
  const navigation = useNavigation<Navigation>();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState(25);
  const [page, setPage] = useState(0);
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [timeoutId, setTimeoutId] = useState<any>(null);

  type Navigation = {
    navigate: (screen: string, params: { bookId: string }) => void;
  };

  useEffect(() => {
    fetchBooks();
  }, [debouncedSearch, page, limit]);  

  // Debounce search function
  const doSearch = (text: string) => {
    setSearch(text);
    if (timeoutId) {
      clearTimeout(timeoutId); // Clear previous timeout to avoid multiple calls
    }

    const id = setTimeout(() => {
      setDebouncedSearch(text);  // Set the debounced search value
    }, 500);  // 500ms delay before triggering search API
    setTimeoutId(id);
  };

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_BASE_URL}/book/getBooks?limit=${limit}&page=${page}&search=${debouncedSearch}`,
        {
          method: 'GET',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }

      const json = await response.json();
      setBooks(json.books);
    } catch (error) {
      console.error('Failed to fetch books:', error);
    } finally {
      setLoading(false);
    }
  };

  const addVisibilityCheck = (value: boolean) => {
    setBannerVisibility(value);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        {/* Scrollable Content */}
        <View style={styles.fixedHeader}>
          <Sliders />
          <Buttons />
          <Search mySearch={doSearch} />
        </View>
        <ScrollView contentContainerStyle={[styles.scrollViewContent]}>
          {/* Scrollable Book Cards */}
          {loading ? (
            <Text style={styles.noBook}>Loading Books...</Text>
          ) : books && books.length > 0 ? (
            books.map((book: any, index: any) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate('BookIndex', { bookId: book._id })}
              >
                <BookCard book={book} />
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.noBook}>No Books Available...</Text>
          )}
        </ScrollView>
      </View>

      {/* Banner Ad */}
      {/* {getBannerVisibility && <BannerAdComponent adUnit={adUnit} addVisibilityCheck={addVisibilityCheck} />} */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    marginTop: 320,
    height: 'auto',
    backgroundColor: 'white',
    paddingBottom: 320,
  },
  fixedHeader: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    zIndex: 1,
  },
  noBook: {
    marginTop: 10,
    paddingLeft: 20,
    fontSize: 20,
  },
});
