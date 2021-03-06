import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { SignInScreen } from '../SignInScreen';
import { BookRouter } from './books/BookRoutes';

export const MainRoutes: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/books" />
    </Route>
    <Route path="/books">
      <BookRouter />
    </Route>
    <Route path="/signin">
      <SignInScreen />
    </Route>
  </Switch>
);
