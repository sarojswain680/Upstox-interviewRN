import {useCallback, useMemo} from 'react';

const usePNLCalculator = data => {
  const calculateCurrentValue = useCallback(() => {
    return data.ltp * data.quantity;
  }, [data]);

  const calculateInvestmentValue = useCallback(() => {
    return data.avgPrice * data.quantity;
  }, [data]);

  const calculatePNL = useCallback(() => {
    const pnl = calculateCurrentValue() - calculateInvestmentValue();
    return pnl.toFixed(2); // Round to two decimal places
  }, [calculateCurrentValue, calculateInvestmentValue]);

  return {
    currentValue: useMemo(calculateCurrentValue, [calculateCurrentValue]),
    investmentValue: useMemo(calculateInvestmentValue, [
      calculateInvestmentValue,
    ]),
    pnl: useMemo(calculatePNL, [calculatePNL]),
  };
};

export default usePNLCalculator;
