import get from 'loadsh/get';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import usePNLCalculator from '../Hooks/usePNLCalculator';

const Card = item => {
  const stock = get(item, 'item', {});
  const {ltp, quantity, symbol} = stock;
  const {pnl} = usePNLCalculator(stock);

  return (
    <View style={styles.card}>
      <Text style={styles.symbol}>{symbol}</Text>
      <Text style={styles.avgPrice}>{quantity}</Text>
      <View style={styles.rightCard}>
        <Text style={styles.ltp}>LTP: {`₹ ${ltp}`}</Text>
        <Text style={styles.quantity}>P/L: {`₹ ${pnl}`}</Text>
      </View>
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
  },
  rightCard: {
    marginTop: -55,
  },
  symbol: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  avgPrice: {
    marginBottom: 5,
    marginTop: 25,
  },
  ltp: {
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  quantity: {
    fontWeight: 'bold',
    marginTop: 20,
    alignSelf: 'flex-end',
  },
  pl: {
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
});

export default Card;
