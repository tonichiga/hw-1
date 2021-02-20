import profile from "./profile.scss";

const Profile = (props) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={props.avatar} alt="" className="avatar" />
        <p className="name">{props.name}</p>
        <p className="tag">@{props.tag}</p>
        <p className="location">{props.location}</p>
      </div>
      <ul className="stats">
        <li className="stats-element">
          <span className="label">Followers</span>
          <span className="quantity">{props.followers}</span>
        </li>
        <li className="stats-element">
          <span className="label">Views</span>
          <span className="quantity">{props.views}</span>
        </li>
        <li className="stats-element">
          <span className="label">Likes</span>
          <span className="quantity">{props.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
