import PropTypes from 'prop-types';
import { GiHumanPyramid } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

export const Profile = ({ username, tag, location, avatar, stats: {followers, views, likes} }) => {
  return (
    <div>
      <div>
        <img src={avatar} alt={username} />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>
      <ul>
        <li>
          <GiHumanPyramid />
          <span> Followers: </span>
          <span>{followers}</span>
        </li>
        <li>
          <FaEye />
          <span> Views: </span>
          <span>{views}</span>
        </li>
        <li>
          <FcLike />
          <span> Likes: </span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};