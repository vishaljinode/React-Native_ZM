import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Sliders() {
    return (
        <View>
            <View style={styles.card}>
                <Image 
                    source={require('../assets/slider.jpg')} 
                    style={styles.sliderImage}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    card: {
        height: 200,
        width: 'auto', // Full width of the parent container
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        margin: 5,
        padding: 0, // Ensure no padding is present in the card
    },
    sliderImage: {
        width: '95%', // Full width of the parent container
        height: '100%', // Full height of the parent container
        resizeMode: 'contain', // Ensures the image fits within the container without being cut
        borderRadius: 0, // Optional: Remove border radius for square corners
    },
})
