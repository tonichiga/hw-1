import Friend from "../friend";
import "./friend-list.scss";
import PropTypes from "prop-types";

const FriendsList = ({ data }) => (
  <section className="friend-section">
    <ul className="frien-list">
      <Friend data={data} />
    </ul>
  </section>
);

export default FriendsList;
