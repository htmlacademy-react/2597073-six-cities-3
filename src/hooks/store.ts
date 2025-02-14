import {useDispatch, useSelector} from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import {AppDispatch, RootState} from '../store/types.ts';
import {selectAuthorizationStatus} from '../store/selectors/userSelectors.ts';
import {AuthorizationStatus} from '../consts.ts';

const useAppDispatch = useDispatch<AppDispatch>;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const useAuth = () => {
  const status = useAppSelector(selectAuthorizationStatus);
  return status === AuthorizationStatus.Auth;
};

export {useAppDispatch, useAppSelector, useAuth};
