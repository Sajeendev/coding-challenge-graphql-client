import { Route, Routes } from 'react-router-dom';
import NotFoundScreen from '../screens/error/not-found.screen';
import HomeScreen from '../screens/home/home.screen';
import SearchScreen from '../screens/search/search.screen';
import { AppUrlEnum } from './app-url.enum';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={AppUrlEnum.Home} element={<HomeScreen />} />
      <Route path={AppUrlEnum.Search} element={<SearchScreen />} />

      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
};

export default AppRoutes;
