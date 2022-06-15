import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundScreen from '../screens/error/not-found.screen';
import HomeScreen from '../screens/home/home.screen';
import ResultScreen from '../screens/result/result.screen';
import { AppUrlEnum } from './app-url.enum';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={AppUrlEnum.Home} element={<HomeScreen />} />
      <Route path={AppUrlEnum.Result} element={<ResultScreen />} />

      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
};

export default AppRoutes;
