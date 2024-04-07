import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import size from 'lodash/size';
import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';
import {API_BASE_URL, HEADER_TITLE, ARROW_UP} from '../Constants';
import useFetchData from '../Hooks/useFetchData';
import useHoldingsCalculator from '../Hooks/useHoldingCalculator';
import BottomSheet from './BottomSheet';
import Card from './Card';
import Header from './Header';
import HoldingsCalculator from './Holding';
import useShimmerCards from '../Hooks/useShimmerCards';

const HoldingsScreen = () => {
  const {loading, error} = useFetchData(API_BASE_URL);
  const {data} = useSelector(state => state.holdingList);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const userHolding = get(data, 'userHolding', []);
  const {totalPNL} = useHoldingsCalculator(userHolding);
  const shimmerCards = useShimmerCards(size(userHolding));
  const toggleBottomSheet = () => {
    setIsBottomSheetOpen(!isBottomSheetOpen);
  };

  if (error) {
    return <Text>Error: {error}</Text>;
  }
  console.log(userHolding);
  return (
    <View testID="holdings-screen">
      {!isEmpty(userHolding) && <Header title={HEADER_TITLE} />}
      {loading && isEmpty(userHolding) && <View>{shimmerCards}</View>}
      <FlatList
        data={userHolding}
        renderItem={({item}) => <Card item={item} />}
        keyExtractor={item => item.symbol}
      />
      {!isEmpty(userHolding) && (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={toggleBottomSheet}
            style={styles.touchable}>
            <View style={styles.row}>
              <Text style={styles.textDecorateLabel}>Profit & Loss:</Text>
              <Image source={ARROW_UP} style={styles.icon} />
              <Text style={styles.textDecorate}>{totalPNL}</Text>
            </View>
          </TouchableOpacity>
          <BottomSheet isOpen={isBottomSheetOpen} onClose={toggleBottomSheet}>
            <HoldingsCalculator
              data={userHolding}
              testId="modal"
              toggleBottomSheet={toggleBottomSheet}
            />
          </BottomSheet>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textDecorate: {
    fontWeight: 'normal',
  },
  textDecorateLabel: {
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  container: {
    justifyContent: 'center',
    top: 50,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 100,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    margin: 16,
    padding: 20,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
  },
  icon: {
    marginLeft: 60,
    marginRight: 60,
  },
});

export default HoldingsScreen;
