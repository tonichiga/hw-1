import React from 'react';
import s from './percent-element.module.scss';

const getRgbColor = () =>
  `rgb( ${Math.random() * 255}, ${Math.random() * 250}, ${
    Math.random() * 250
  })`;

const PercentageElement = ({ stat }) =>
  stat.map(({ id, label, percentage }) => {
    return (
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
  });
export default PercentageElement;
