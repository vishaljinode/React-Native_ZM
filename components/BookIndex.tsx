import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { API_BASE_URL, interstitialUnit } from '../Api_urls.js';
import { RootStackParamList } from '../types'; 
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { InterstitialAd, AdEventType } from 'react-native-google-mobile-ads';

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
  const [initAd, setInitAd] = useState<any>(null);
  
  // Use the typed useNavigation hook
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'BookIndex'>>();

  useEffect(() => {
    // Load the interstitial ad when the component mounts
    initial();
    fetchIndex();
  }, []);

  const initial = async () => {
    // Initialize the interstitial ad
    const interAd = InterstitialAd.createForAdRequest(interstitialUnit);

    // Listen for when the ad is loaded
    interAd.addAdEventListener(AdEventType.LOADED, () => {
      setInitAd(interAd); // Set the ad once it's loaded
      console.log("Init ad loaded");
    });

    // Optionally listen for when the ad is closed
    interAd.addAdEventListener(AdEventType.CLOSED, () => {
      console.log("Init ad closed");
    });

    // Load the ad
    interAd.load();
  };

  const showInitAd = async (item: any) => {
    // Ensure the ad is loaded before navigating to the next screen
    if (initAd) {
      // Navigate to the Story screen first, then show the ad
      navigation.navigate('Story', { storyId: item._id });

      // Show the interstitial ad if it's loaded
      initAd.show().catch((error: any) => {
        console.log('Error showing ad:', error);
      });
    } else {
      // If the ad isn't loaded, navigate without showing it
      navigation.navigate('Story', { storyId: item._id });
    }
  };

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
            onPress={() => {
              showInitAd(item); // This will show the interstitial ad
            }} >
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
