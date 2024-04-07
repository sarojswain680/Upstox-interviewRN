import {useCallback, useMemo} from 'react';

const useHoldingsCalculator = data => {
  const calculateCurrentValue = useCallback(
    (ltp, quantity) => ltp * quantity,
    [],
  );

  const calculateInvestmentValue = useCallback(
    (avgPrice, quantity) => avgPrice * quantity,
    [],
  );

  const currentValues = useMemo(() => {
    return data.map(({ltp, quantity}) => calculateCurrentValue(ltp, quantity));
  }, [data, calculateCurrentValue]);

  const investmentValues = useMemo(() => {
    return data.map(({avgPrice, quantity}) =>
      calculateInvestmentValue(avgPrice, quantity),
    );
  }, [data, calculateInvestmentValue]);

  const totalCurrentValue = useMemo(() => {
    return currentValues.reduce((acc, currentValue) => acc + currentValue, 0);
  }, [currentValues]);

  const totalInvestmentValue = useMemo(() => {
    return investmentValues.reduce(
      (acc, investmentValue) => acc + investmentValue,
      0,
    );
  }, [investmentValues]);

  const totalPNL = useMemo(() => {
    const totalPNL = totalCurrentValue - totalInvestmentValue;
    return totalPNL.toFixed(2);
  }, [totalCurrentValue, totalInvestmentValue]);

  const todaysPNL = useMemo(() => {
    return data
      .reduce(
        (acc, {close, ltp, quantity}) => acc + (close - ltp) * quantity,
        0,
      )
      .toFixed(2);
  }, [data]);

  return {totalCurrentValue, totalInvestmentValue, totalPNL, todaysPNL};
};

export default useHoldingsCalculator;
