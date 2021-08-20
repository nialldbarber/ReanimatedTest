import React from 'react';
import {StyleSheet, View} from 'react-native';
import Banner from '../components/Banner';
import Navigation from '../components/Navigation';
import GestureStuff from '../components/GestureStuff';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Banner />
      <Navigation />
      <GestureStuff />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
