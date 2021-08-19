import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {PINKISH} from '../screens/HomeScreen';

export default function Navigation() {
  const {navigate} = useNavigation() as any;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={() => navigate('Test')}>
        <Text style={styles.text}>Test page</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: PINKISH,
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
