import {TUser, TUserState} from '../types.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {checkAuth, login, logout} from '../thunk/user.ts';
import {AuthorizationStatus} from '../../consts.ts';

const initialState: TUserState = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  AuthInfo: {
    name: '',
    avatarUrl: '',
    isPro: null,
    email: '',
    token: '',
  }
};

const successLogin = (state: TUserState, action: PayloadAction<TUser>) => {
  state.authorizationStatus = AuthorizationStatus.Auth;
  state.AuthInfo = action.payload;
};

const failedLogin = (state: TUserState) => {
  state.authorizationStatus = AuthorizationStatus.NoAuth;
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.fulfilled, successLogin)
      .addCase(checkAuth.rejected, failedLogin)
      .addCase(login.fulfilled, successLogin)
      .addCase(login.rejected, failedLogin)
      .addCase(logout.fulfilled, () => initialState);
  }
});

const userActions = userSlice.actions;
export {userSlice, userActions};
