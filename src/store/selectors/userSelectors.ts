import {RootState} from '../types.ts';

export const selectAuthorizationStatus = (state: RootState) => state.user.authorizationStatus;
