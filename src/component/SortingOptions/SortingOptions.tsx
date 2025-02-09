import {TSortOptions} from '../Offers-list/types.ts';
import React, {Dispatch, SetStateAction} from 'react';
import {SORTING_OPTIONS} from '../../consts.ts';

type TSortOptionsProps = {
  optionsForm: TSortOptions;
  setOptionsForm: Dispatch<SetStateAction<TSortOptions>>;
};

const SortingOptions = ({optionsForm, setOptionsForm}: TSortOptionsProps) => {
  const {selectedOption,formToggle} = optionsForm;

  const handleToggle = () => {
    setOptionsForm((prev) => ({...prev, formToggle: !prev.formToggle}));
  };
  const handleOption = (e: React.MouseEvent<HTMLLIElement>, option: string) => {
    e.stopPropagation();
    setOptionsForm(() => ({formToggle: false, selectedOption: option}));
  };

  return (
    <form onClick={handleToggle} className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex={0}>
        {selectedOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${formToggle ? 'places__options--opened' : ''}`}>
        {SORTING_OPTIONS.map((option) => (
          <li
            className={`places__option ${selectedOption === option ? 'places__option--active' : ''}`}
            onClick={(e) => handleOption(e, option)}
            key={option}
            tabIndex={0}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default SortingOptions;
