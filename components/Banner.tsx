import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export default function Banner() {
  const height = useSharedValue(0);

  const bannerHeight = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  }, []);

  useEffect(() => {
    height.value = withSpring(500);
  }, []);

  return (
    <Animated.View style={[styles.container, bannerHeight]}>
      <Text>Banner</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -50,
    right: 0,
    left: 0,
    backgroundColor: '#53BBF2',
    transform: [{skewY: '12deg'}],
  },
});
