import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';

const Skeleton = () => {
  const shimmerAnimation = new Animated.Value(0);

  React.useEffect(() => {
    Animated.loop(
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
    ).start();
  }, []);

  const shimmerOpacity = shimmerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 1],
  });

  return (
    <View style={styles.card} testID="skeleton-card">
      <View style={styles.imageContainer} testID="image-container">
        <Animated.View
          style={[
            styles.image,
            {
              opacity: shimmerOpacity,
            },
          ]}
          testID="image"
        />
      </View>
      <View style={styles.content} testID="content">
        <Animated.View
          style={[
            styles.text,
            {
              opacity: shimmerOpacity,
            },
          ]}
          testID={'text1'}
        />
        <Animated.View
          style={[
            styles.text,
            {
              opacity: shimmerOpacity,
            },
          ]}
          testID={'text2'}
        />
        <Animated.View
          style={[
            styles.button,
            {
              opacity: shimmerOpacity,
            },
          ]}
          testID={'button'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 2,
    width: '100%',
    padding: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
    marginBottom: 10,
  },
  image: {
    backgroundColor: '#E0E0E0',
    flex: 1,
    borderRadius: 8,
  },
  content: {
    marginBottom: 10,
  },
  text: {
    backgroundColor: '#E0E0E0',
    height: '20%',
    height: 20,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#E0E0E0',
    height: '20%',
    height: 40,
    borderRadius: 20,
  },
});

export default Skeleton;
