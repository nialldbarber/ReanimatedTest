import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Banner from './components/Banner';

const SIZE = 100.0;
const CIRCLE_RADIUS = SIZE * 2;

type ContextType = {
  translateX: number;
  translateY: number;
};

export default function App() {
  const translateX = useSharedValue<number>(0);
  const translateY = useSharedValue<number>(0);
  const circleColor = useSharedValue<number | string>('rgba(0, 0, 256, 0.5)');

  const gestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (_, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: () => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);

      if (distance < CIRCLE_RADIUS + SIZE / 2) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }

      if (distance > CIRCLE_RADIUS) {
        circleColor.value = withTiming('rgba(255, 99, 71, 0.5)');
      } else {
        circleColor.value = withTiming('rgba(0, 0, 256, 0.5)');
      }
    },
  });

  const translateStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: circleColor.value,
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  }, []);

  return (
    <View style={styles.container}>
      <Banner />
      <View style={styles.circleContainer}>
        <PanGestureHandler onGestureEvent={gestureEvent}>
          <Animated.View style={[styles.circle, translateStyle]} />
        </PanGestureHandler>
      </View>
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
  circle: {
    borderRadius: 20,
    width: SIZE,
    height: SIZE,
  },
  circleContainer: {
    borderWidth: 5,
    borderColor: 'rgba(0, 0, 256, 0.5)',
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
