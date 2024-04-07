import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
const Header = ({title}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#A020F0',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 20,
    color: '#FFFFFF',
    padding: 15,
    fontWeight: 'bold',
  },
});

export default Header;
