import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Buttons() {
  return (
    <View>
      <View style={styles.container}>
        <Button
          title="Rating"
          onPress={() => Alert.alert('Rating')}
        />
        <Button
          title="Instagram"
          onPress={() => Alert.alert('Instagram')}
        />
        <Button
          title="Privacy"
          onPress={() => Alert.alert('Privacy')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: 'pink',
    height: 50,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    flexDirection: 'row',
  }


})