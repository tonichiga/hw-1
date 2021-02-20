import PercentageElement from "../percentage/index";
import "./statistic.scss";

const Statistics = ({ title, statData }) => {
  return (
    <section className="statistics-wrapper">
      <h2 className="statistics-title">{title}</h2>
      <ul className="statistics-list">
        <PercentageElement stat={statData} />
      </ul>
    </section>
  );
};
export default Statistics;
