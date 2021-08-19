import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export default function Banner() {
  const height = useSharedValue(0);

  const bannerHeight = useAnimatedStyle(
    () => ({
      height: height.value,
    }),
    []
  );

  useEffect(() => {
    setTimeout(() => {
      height.value = withSpring(500);
    }, 700);
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
