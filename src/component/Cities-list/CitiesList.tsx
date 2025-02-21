import {Cities} from '../../consts.ts';
import {useAppDispatch, useAppSelector} from '../../hooks/store.ts';
import {offersAction} from '../../store/slices/offers.ts';
import {selectCity} from '../../store/selectors/offersSelectors.ts';
import {memo} from 'react';

const CitiesList = () => {
  const currentCity = useAppSelector(selectCity);
  const dispatch = useAppDispatch();

  const handleChangeCity = (name: string) => {
    dispatch(offersAction.changeCity(name));
  };

  return (
    <ul className="locations__list tabs__list">
      {Cities.map(({name}) => (
        <li key={name} className="locations__item">
          <a
            onClick={() => handleChangeCity(name)}
            className={`locations__item-link tabs__item ${currentCity === name ? 'tabs__item--active' : ''}`}
          >
            <span>{name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default memo(CitiesList);
