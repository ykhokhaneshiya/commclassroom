import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import HomeView from './views/pages/HomeView/index';
import MainLayout from './layouts/MainLayout';
// feel free to create own routes & just rock on guys .
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <MainLayout>
          <HomeView />
        </MainLayout>
      </Route>
    </Switch>
  );
};

export default Routes;
