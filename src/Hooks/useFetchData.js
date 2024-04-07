import axios from 'axios';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  setData,
  setError,
  setLoading,
} from '../Redux/Reducer/slices/holdingListSlice';

const useFetchData = url => {
  const dispatch = useDispatch();
  const {isLoading, error} = useSelector(state => state.holdingList);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading());
        const response = await axios.get(url);
        dispatch(setData(response.data));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };

    fetchData();
  }, [dispatch, url]);

  return {isLoading, error};
};

export default useFetchData;
