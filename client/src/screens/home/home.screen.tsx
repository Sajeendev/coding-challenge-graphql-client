import { useEffect } from 'react';
import { getLocationsAction } from '../../state/flight-search/get-locations.slice';
import { useAppDispatch, useAppSelector } from '../../state/store';

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  /**
   * Global state
   */
  const getLocationsState = useAppSelector(state => state.getLocationsState);
  const { loading, success, data } = getLocationsState;

  /**
   * Effects
   */
  useEffect(() => {
    // Avoid calling api for every pageload to optimize performance
    !success && dispatch(getLocationsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  return <div>HomeScreen</div>;
};

export default HomeScreen;
