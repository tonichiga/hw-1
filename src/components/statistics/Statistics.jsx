import React from 'react';
import PercentageElement from './components/StatisticsElement';
import s from './statistic.module.scss';

const Statistics = ({ title, statData }) => {
  return (
    <section className={s.statisticsWrapper}>
      <h2 className={s.statisticsTitle}>{title}</h2>
      <ul className={s.statisticsList}>
        {statData.map(({ id, label, percentage }) => (
          <PercentageElement id={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};
export default Statistics;
