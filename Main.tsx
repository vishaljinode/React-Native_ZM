import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from './App';  // This is your home screen component
import BookIndexScreen from './components/BookIndex';
import StoryScreen from './components/StoryScreen';


const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Home Screen */}
        <Stack.Screen name="Home" component={App} options={{ title: 'Rastriya Shayar' }} />
        <Stack.Screen name="BookIndex" component={BookIndexScreen} options={{ title: "અનુક્રમણિકા" }} />
        <Stack.Screen name="Story" component={StoryScreen} options={{ title: "Loading..." }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
