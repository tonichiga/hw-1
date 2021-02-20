import "./percent-element.scss";

const getRgbColor = () =>
  `rgb( ${Math.random() * 255}, ${Math.random() * 250}, ${
    Math.random() * 250
  })`;

const PercentageElement = ({ stat }) =>
  stat.map(({ id, label, percentage }) => {
    return (
      <li
        className="perc-element"
        key={id}
        style={{
          backgroundColor: getRgbColor(),
        }}
      >
        <span className="perc-label">{label}</span>
        <span className="perc-item">{percentage}%</span>
      </li>
    );
  });
export default PercentageElement;
