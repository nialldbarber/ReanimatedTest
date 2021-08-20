import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PINKISH} from './GestureStuff';
import {RootStackParamList} from '../App';

type TestScreenProp = StackNavigationProp<RootStackParamList, 'Test'>;

export default function Navigation() {
  const {navigate} = useNavigation<TestScreenProp>();

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
