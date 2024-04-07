import React from 'react';
import ShimmerCard from '../Component/Shimmercard';

const useShimmerCards = count => {
  const shimmerCards = [];

  for (let i = 0; i < count; i++) {
    shimmerCards.push(<ShimmerCard key={i} />);
  }

  return shimmerCards;
};

export default useShimmerCards;
