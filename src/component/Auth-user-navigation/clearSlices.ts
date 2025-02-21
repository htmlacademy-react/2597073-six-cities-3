import {AppDispatch} from '../../store/types.ts';
import {userActions} from '../../store/slices/user.ts';
import {favoritesAction} from '../../store/slices/favorites.ts';
import {commentAction} from '../../store/slices/comments.ts';

export const clearSlices = (dispatch: AppDispatch) => {
  dispatch(userActions.clear());
  dispatch(favoritesAction.clear());
  dispatch(commentAction.clear());
};
