import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function BookCard(props: any) {
    return (
        <View style={styles.card}>
        <Image
        //  source={require('../assets/icon.png')} 
         source={{ uri: props.book.bookImage.mediaUrl }} 
         style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>
            {/* Saurastra Ni Rasdhar */}
            {props.book.bookName}
            </Text>
          <Text style={styles.author}>
          {props.book.author}
            </Text>
          
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    card: {
      flexDirection: 'row', 
      borderWidth: 1,
      borderColor: '#ccc',
      backgroundColor :'white',
      borderRadius: 8,
      padding: 10,
      margin: 10,
      alignItems: 'center',
    },
    image: {
      width: 100,
      height: 150,
      borderRadius: 8,
      marginRight: 10,
    },
    content: {
      flex: 1, // Take remaining space
    },
    title: {
      fontSize: 20,
      fontWeight: 'black'
    },
    author: {
      fontSize: 16,
      fontWeight: 'bold',
      color : 'green'
    },
  });
