import React, {useEffect, useState} from 'react';
import {Animated, Dimensions, Modal, StyleSheet, View} from 'react-native';

const BottomSheet = ({isOpen, onClose, children}) => {
  const [animatedHeight] = useState(new Animated.Value(0));
  const screenHeight = Dimensions.get('window').height;

  useEffect(() => {
    if (isOpen) {
      Animated.timing(animatedHeight, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedHeight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isOpen]);

  return (
    <Modal
      transparent
      animationType="fade"
      testID="modal"
      visible={isOpen}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.contentContainer,
            {
              height: screenHeight * 0.4, // 40% of the screen height
              transform: [
                {
                  translateY: animatedHeight.interpolate({
                    inputRange: [0, 0.4],
                    outputRange: [screenHeight, screenHeight * 0.6],
                  }),
                },
              ],
            },
          ]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  contentContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});

export default BottomSheet;
