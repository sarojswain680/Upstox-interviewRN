import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {ARROW_DOWN} from '../Constants';
import useHoldingsCalculator from '../Hooks/useHoldingCalculator';

const HoldingsCalculator = ({data, toggleBottomSheet}) => {
  const {totalCurrentValue, totalInvestmentValue, totalPNL, todaysPNL} =
    useHoldingsCalculator(data);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleBottomSheet} style={styles.touchable}>
        <View style={styles.row}>
          <Image source={ARROW_DOWN} />
        </View>
      </TouchableOpacity>
      <Text style={styles.label}>Current Value:</Text>
      <Text style={styles.value}>{`₹ ${totalCurrentValue}`}</Text>

      <Text style={styles.label}>Total Investment:</Text>
      <Text style={styles.value}>{`₹ ${totalInvestmentValue}`}</Text>

      <Text style={styles.label}>Today's Profit & Loss:</Text>
      <Text style={styles.value}>{`₹ ${todaysPNL}`}</Text>

      <View style={styles.bottomContent}>
        <Text style={styles.label}>Profit & Loss:</Text>
        <Text style={styles.value}>{`₹ ${totalPNL}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  label: {
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop: 15,
  },
  value: {
    textAlign: 'right',
    marginTop: -20,
  },
  bottomContent: {
    top: 100,
    bottom: 0,
  },
  row: {
    alignSelf: 'center',
  },
});

export default HoldingsCalculator;
