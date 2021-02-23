import React from 'react';
import s from './StatisticsElement.module.scss';

const getRgbColor = () =>
  `rgb( ${Math.random() * 255}, ${Math.random() * 250}, ${
    Math.random() * 250
  })`;

const PercentageElement = ({ id, label, percentage }) => (
  <li
    className={s.percElement}
    key={id}
    style={{
      backgroundColor: getRgbColor(),
    }}
  >
    <span className={s.percLabel}>{label}</span>
    <span className={s.percItem}>{percentage}%</span>
  </li>
);

export default PercentageElement;
