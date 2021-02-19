const Friend = ({ data }) =>
  data.map(({ avatar, name, isOnline, id }) => {
    return (
      <li key={id}>
        <h2>{name}</h2>
        <img src={avatar} alt="" />
        <span>{isOnline ? "yes" : "no"}</span>
      </li>
    );
  });
export default Friend;
