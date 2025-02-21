import React, {memo, useEffect, useState} from 'react';
import {useAppDispatch} from '../../hooks/store.ts';
import {toggleFavorite} from '../../store/thunk/favorites.ts';
import {toast} from 'react-toastify';

type TFavoriteButtonProps = {
  isFavorite: boolean;
  id: string;
  className: string;
  width: string;
  height: string;
  isAuth: boolean;
};

const ToggleFavoriteButton = ({isFavorite, id, className, width, height, isAuth}: TFavoriteButtonProps) => {
  const dispatch = useAppDispatch();

  const [favoriteStatus, setFavoriteStatus] = useState<boolean>(isFavorite);

  useEffect(() => {
    if (!isAuth) {
      setFavoriteStatus(false);
    }
  }, [isAuth]);

  const handleToggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!isAuth) {
      return toast.error('You are not logged in');
    }

    const newStatus = favoriteStatus ? 0 : 1;
    dispatch(toggleFavorite({status: newStatus, offerId: id}));
    setFavoriteStatus((prev) => !prev);
  };

  return (
    <button
      onClick={handleToggleFavorite}
      className={`${className}__bookmark-button ${favoriteStatus ? 'place-card__bookmark-button--active' : ''} button`}
      type="button"
    >
      <svg className="place-card__bookmark-icon" width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{favoriteStatus ? 'From bookmarks' : 'To bookmarks'}</span>
    </button>
  );
};

export default memo(ToggleFavoriteButton);
