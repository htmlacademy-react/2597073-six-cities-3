import {Middleware, PayloadAction} from '@reduxjs/toolkit';
import {login, logout} from '../thunk/user.ts';
import {AppDispatch, TUser} from '../types.ts';
import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();

const redirectActions = [
  login.fulfilled.type,
  logout.fulfilled.type,
];

export const redirectMiddleware: Middleware =
  () => (next: AppDispatch) => (action: PayloadAction<TUser>) => {
    const result = next(action);

    if (redirectActions.includes(result.type)) {
      history.push('/');
    }
    return next(action);
  };
