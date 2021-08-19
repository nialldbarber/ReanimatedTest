import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import Banner from '../components/Banner';

export default function TestPageView() {
  const {navigate} = useNavigation() as any;

  return (
    <View style={styles.container}>
      <Banner />
      <TouchableOpacity style={styles.back} onPress={() => navigate('Home')}>
        <Icon name="chevron-left" type="fontawesome" />
      </TouchableOpacity>
      <Text style={{fontSize: 40}}>Dis the test page!</Text>
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
  back: {
    position: 'absolute',
    top: 70,
    left: 47,
  },
});
