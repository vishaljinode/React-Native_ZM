import { SafeAreaView, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import Sliders from './components/Sliders';
import Buttons from './components/Buttons';
import Search from './components/Search';
import BookCard from './components/BookCard';
import BannerAdComponent from './components/BannerAd';
import { useNavigation } from '@react-navigation/native';
import { API_BASE_URL } from './Api_urls.js';



export default function App() {
  // const adUnit = 'ca-app-pub-3940256099942544/6300978111'; // Test Ad ID
  // const [getBannerVisibility, setBannerVisibility] = useState(true);
  const [books, setBooks] = useState<any>([]);
  const navigation = useNavigation<Navigation>();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState(25);
  const [page, setPage] = useState(0);
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const timeoutIdRef = useRef<any>(null); // Using useRef to store timeoutId
  const [hasMore, setHasMore] = useState(true);  // Track if more data is available

  type Navigation = {
    navigate: (screen: string, params: { bookId: string }) => void;
  };

  useEffect(() => {
    if (hasMore) {
      fetchBooks();
    }
  }, [debouncedSearch, page, limit, hasMore]);

  // Debounce search function
  const doSearch = (text: string) => {
    setSearch(text); // Update search immediately

    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current); // Clear previous timeout to avoid multiple calls
    }

    timeoutIdRef.current = setTimeout(() => {
      setDebouncedSearch(text);  // Set the debounced search value after delay
    }, 500);  // 500ms delay before triggering search API
  };

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const searchQuery = debouncedSearch ? `&search=${debouncedSearch}` : '';  // Only add search param if there's a search term

      // console.log("URL------->",       `${API_BASE_URL}/book/getBooks?limit=${limit}&page=${page}${searchQuery}`,)
      const response = await fetch(
        `${API_BASE_URL}/book/getBooks?limit=${limit}&page=${page}${searchQuery}`,
        { method: 'GET' }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }

      const json = await response.json();
      setBooks((prevBooks: any) => {
        const newBooks = json.books.filter(
          (newBook: { _id: any; }) => !prevBooks.some((prevBook: any) => prevBook._id === newBook._id)
        );
        return [...prevBooks, ...newBooks];
      });

      // Check if more books are available
      setHasMore(json.totalCount > (page * limit));  
      // setHasMore(json.totalCount > (page + 1) * limit);

    } catch (error) {
      console.error('Failed to fetch books:', error);
    } finally {
      setLoading(false);
    }
  };



  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setPage(prevPage => prevPage + 1); // Increase page number when reaching the end
    }
  };

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={() => navigation.navigate('BookIndex', { bookId: item._id })}>
      <BookCard book={item} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        {/* Scrollable Content */}
        <View style={styles.fixedHeader}>
          <Sliders />
          <Buttons />
          {/* <Search mySearch={doSearch} /> */}
        </View>

        {/* FlatList for infinite scroll */}
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          onEndReached={handleLoadMore} // Trigger more data loading when scrolled to the end
          onEndReachedThreshold={0.5} // Trigger when 50% of the content is visible
          ListFooterComponent={
            loading ? <Text style={styles.noBook}>Loading...</Text> : null
          }
          contentContainerStyle={styles.scrollViewContent}
        />
      </View>

     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    marginTop: 270,
    backgroundColor: 'white',
    paddingBottom: 270,
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
