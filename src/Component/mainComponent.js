import get from 'loadsh/get';
import isEmpty from 'loadsh/isEmpty';
import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import {API_BASE_URL, HEADER_TITLE} from '../Constants';
import useFetchData from '../Hooks/useFetchData';
import useHoldingsCalculator from '../Hooks/useHoldingCalculator';
import BottomSheet from './BottomSheet';
import Card from './Card';
import Header from './Header';
import HoldingsCalculator from './Holding';
import Skeleton from './Skeleton';

const HoldingsScreen = () => {
  const {loading, error} = useFetchData(API_BASE_URL);
  const {data} = useSelector(state => state.holdingList);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  const renderItem = ({item}) => <Card item={item} />;

  const userHolding = get(data, 'userHolding', []);

  const toggleBottomSheet = () => {
    setIsBottomSheetOpen(!isBottomSheetOpen);
  };
  const {totalPNL} = useHoldingsCalculator(userHolding);

  return (
    <View>
      {!isEmpty(userHolding) && <Header title={HEADER_TITLE} />}
      {loading && isEmpty(userHolding) && (
        <View>
          <Skeleton />
          <Skeleton />
        </View>
      )}
      <FlatList
        data={userHolding}
        renderItem={renderItem}
        keyExtractor={item => item.symbol}
      />
      {!isEmpty(userHolding) && (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={toggleBottomSheet}
            style={styles.touchable}>
            <View style={styles.row}>
              <Text style={styles.textDecorateLabel}>Profit & Loss:</Text>
              <Icon
                name="angle-up"
                size={24}
                style={styles.icon}
                color="#A020F0"
              />
              <Text style={styles.textDecorate}>{totalPNL}</Text>
            </View>
          </TouchableOpacity>
          <BottomSheet isOpen={isBottomSheetOpen} onClose={toggleBottomSheet}>
            <HoldingsCalculator
              data={userHolding}
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
  textDecorateLabel: {fontWeight: 'bold'},
  container: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    top: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 100,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 60,
    marginRight: 60,
  },
});

export default HoldingsScreen;
