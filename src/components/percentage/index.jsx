const PercentageElement = ({ stat }) =>
  stat.map(({ id, label, percentage }) => {
    return (
      <li key={id}>
        <span>{percentage}</span>
        <span>{label}</span>
      </li>
    );
  });
export default PercentageElement;
