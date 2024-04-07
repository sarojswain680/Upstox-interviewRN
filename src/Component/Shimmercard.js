import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';

const ShimmerCard = () => {
  const [shimmerAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    const shimmerAnimationLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnimation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerAnimation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    );
    shimmerAnimationLoop.start();

    return () => shimmerAnimationLoop.stop();
  }, [shimmerAnimation]);

  const shimmerOpacity = shimmerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 1],
  });

  return (
    <View style={styles.card} testID="skeleton-card">
      <Animated.View
        testID="skeleton1"
        style={[styles.shimmer, {opacity: shimmerOpacity}]}
      />
      <Animated.View
        testID="skeleton2"
        style={[styles.shimmer, {opacity: shimmerOpacity}]}
      />
      <Animated.View
        testID="skeleton3"
        style={[styles.shimmer, {opacity: shimmerOpacity}]}
      />
      <Animated.View
        testID="skeleton4"
        style={[styles.shimmer, {opacity: shimmerOpacity}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shimmer: {
    backgroundColor: '#e0e0e0', // Placeholder color
    borderRadius: 5,
    width: '20%',
    height: 20,
  },
});

export default ShimmerCard;
