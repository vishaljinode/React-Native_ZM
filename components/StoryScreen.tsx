// Import necessary types from react-navigation
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';

// Define types for navigation and route params
type RootStackParamList = {
  Home: undefined;
  BookIndex: { bookId: string };
  Story: { storyId: string };  // Define the param type for "Story" screen
};

// Type for StoryScreen props
type StoryScreenProps = {
  route: RouteProp<RootStackParamList, 'Story'>;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Story'>;
};

const StoryScreen = ({ route, navigation }: StoryScreenProps) => {
  const { storyId } = route.params;
  const [story, setStory] = useState<string>('');
  const [loading, setLoading] = useState(true);

  // Fetch the story data based on the `storyId`
  useEffect(() => {
    fetchStory(storyId);
  }, [storyId]);

  const fetchStory = async (id: string) => {
    try {
      const response = await fetch(`API_URL_TO_FETCH_STORY/${id}`);
      const data = await response.json();
      setStory(data.description);  // assuming `description` is the story content
    } catch (error) {
      console.error("Failed to fetch story", error);
    } finally {
      setLoading(false);
    }
  };

  // Update the header title dynamically once the story data is fetched
  useLayoutEffect(() => {
    if (!loading) {
      navigation.setOptions({
        title: "Story Title",  // Replace with actual title from story data
      });
    }
  }, [loading]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView>
          <Text>{story}</Text>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default StoryScreen;
