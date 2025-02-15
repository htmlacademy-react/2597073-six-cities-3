import {Cities} from '../../consts.ts';
import {useAppDispatch, useAppSelector} from '../../hooks/store.ts';
import {offersAction} from '../../store/slices/offers.ts';

const CitiesList = () => {
  const currentCity = useAppSelector((state) => state.offers.city);
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {Cities.map(({name}) => (
        <li key={name} className="locations__item">
          <a
            onClick={() => dispatch(offersAction.changeCity(name))}
            className={`locations__item-link tabs__item ${currentCity === name ? 'tabs__item--active' : ''}`}
          >
            <span>{name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CitiesList;
