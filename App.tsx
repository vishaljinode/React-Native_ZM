import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Sliders from './components/Sliders';
import Buttons from './components/Buttons';
import Search from './components/Search';
import BookCard from './components/BookCard';
import BannerAdComponent from './components/BannerAd';

export default function App() {
  const adUnit = 'ca-app-pub-3940256099942544/6300978111'; // Test Ad ID

  const [getBannerVisibility, setBannerVisibility] = useState(true);

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
        <Search />
      </View>
      <ScrollView
        contentContainerStyle={[styles.scrollViewContent]}
      >
        {/* Scrollable Book Cards */}
        <TouchableOpacity>
        <BookCard />
        </TouchableOpacity>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </ScrollView>
      </View>

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
    //  marginBottom: 200, 
    height: 'auto',
    backgroundColor: 'white',
    paddingBottom: 320
  },
  fixedHeader: {
    position: 'absolute',
//    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    zIndex: 1,




  },
  banner: {
    // margin: 10
  }
});
