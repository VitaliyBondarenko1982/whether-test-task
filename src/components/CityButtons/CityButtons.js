import React from 'react';
import PropTypes from 'prop-types';
import * as cx from 'classnames';

export const CityButtons = ({ loadData, currentCityName }) => (
  <div className="buttons">
    <button
      className={cx('button',
        { 'button--current': currentCityName === 'Kyiv' })}
      type="button"
      onClick={() => loadData('Kyiv')}
    >
      Kyiv
    </button>
    <button
      className={cx('button',
        { 'button--current': currentCityName === 'London' })}
      type="button"
      onClick={() => loadData('London')}
    >
      London
    </button>
    <button
      className={cx('button',
        { 'button--current': currentCityName === 'New York' })}
      type="button"
      onClick={() => loadData('New York')}
    >
      New York
    </button>
  </div>
);

CityButtons.propTypes = {
  loadData: PropTypes.func.isRequired,
  currentCityName: PropTypes.string.isRequired,
};
