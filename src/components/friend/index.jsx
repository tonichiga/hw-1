import friend from "./friend.scss";
import PropTypes from "prop-types";

const style = () => `

`;

const Friend = ({ data }) =>
  data.map(({ avatar, name, isOnline, id }) => {
    return (
      <li className="friend-element" key={id}>
        <h2 className="friend-title">{name}</h2>
        <img className="friend-img" src={avatar} alt="" />
        <span
          className="friend-status"
          style={
            isOnline
              ? {
                  backgroundColor: `rgb(0, 230, 0)`,
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                }
              : {
                  backgroundColor: `rgb(220, 0, 0)`,
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                }
          }
        ></span>
      </li>
    );
  });
export default Friend;

Friend.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
