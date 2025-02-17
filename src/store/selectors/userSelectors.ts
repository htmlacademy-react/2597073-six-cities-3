import {RootState} from '../types.ts';

export const selectAuthorizationStatus = (state: RootState) => state.user.authorizationStatus;
export const selectIsAuthLoading = (state: RootState) => state.user.isAuthLoading;
