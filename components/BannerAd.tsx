import { StyleSheet, View } from 'react-native';
import React from 'react';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

export default function BannerAdComponent(props: any) {
  return (
    <View style={styles.container}>
      <BannerAd
        size={BannerAdSize.BANNER}
        unitId={props.adUnit} // Test Ad Unit ID
        onAdLoaded={() => {
          console.log('Advert loaded');
          props.addVisibilityCheck(true); // Correct visibility toggle
        }}
        onAdFailedToLoad={error => {
          console.error('Advert failed to load: ', error);
          props.addVisibilityCheck(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',  // Position ad at the bottom
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'green',
    marginTop: 100,
    paddingBottom: 5,
  },
});
