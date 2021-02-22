import style from '../friend-list.module.scss';
import PropTypes from 'prop-types';

const Friend = ({ data }) =>
  data.map(({ avatar, name, isOnline, id }) => {
    return (
      <li className={style.friendElement} key={id}>
        <h2 className={style.friendTitle}>{name}</h2>
        <img className={style.friendImg} src={avatar} alt="" />
        <span
          className={style.friendStatus}
          style={
            isOnline
              ? {
                  backgroundColor: `rgb(0, 230, 0)`,
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                }
              : {
                  backgroundColor: `rgb(220, 0, 0)`,
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
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
    }),
  ),
};
