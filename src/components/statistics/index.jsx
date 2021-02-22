import React from 'react';
import PercentageElement from '../Percentage/index';
import s from './statistic.module.scss';

const Statistics = ({ title, statData }) => {
  return (
    <section className={s.statisticsWrapper}>
      <h2 className={s.statisticsTitle}>{title}</h2>
      <ul className={s.statisticsList}>
        <PercentageElement stat={statData} />
      </ul>
    </section>
  );
};
export default Statistics;
