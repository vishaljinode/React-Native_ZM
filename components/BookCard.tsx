import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function BookCard() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/icon.png')} // Path to your image
                style={styles.card}
                imageStyle={styles.cardImage} // Optional styling for the image itself
            >           
            </ImageBackground>

            <View style={styles.detail}>
                <View style={styles.title}>
                    <Text>Saurastra Ni Rasdhar 1 </Text>
                </View>

                <View style={styles.author}>
                    <Text>Zaverchande Meghani</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: 'yellow',
        height: 200,
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
    card: {
        height: 180,
        width: '30%', // Adjust width to fit within the container
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardImage: {
        borderRadius: 10, // Optional: if you want the image to have rounded corners
        opacity: 0.7, // Optional: adjust opacity to blend the image with the content
        width: "100%"
    },
    cardText: {
        color: 'white',
        fontWeight: 'bold',
    },
    detail: {
        // width: '90%',
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        marginLeft: 10
    },
    title: {
        marginLeft: 5,
    },
    author: {
        marginLeft: 5,
    },
});
