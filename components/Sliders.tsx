import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Sliders() {
    return (
        <View>
            <View style={styles.card}>
                <Text>Sliders22</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    card: {
        height: 200,
        width:'auto',
        backgroundColor: 'yellow',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        margin: 5
    }
})