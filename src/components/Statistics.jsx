import PercentageElement from "./percentage/index";

const Statistics = ({ title, statData }) => {
  return (
    <section className="statistics-wrapper">
      <h2>{title}</h2>
      <ul className="statistics-list">
        <PercentageElement stat={statData} />
      </ul>
    </section>
  );
};
export default Statistics;
