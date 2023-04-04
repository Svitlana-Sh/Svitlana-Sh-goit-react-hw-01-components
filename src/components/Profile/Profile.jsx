import PropTypes from 'prop-types';
import { GiHumanPyramid } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import {
  ProfileCard,
  StatsList,
  ProfileAva,
  ProfileName,
  ProfileTag,
  ProfileStatsItem,
  ProfileStatsLable
} from "./Profile-style";

export const Profile = ({ username, tag, location, avatar, stats: {followers, views, likes} }) => {
  return (
    <ProfileCard>
      <div>
        <ProfileAva src={avatar} alt={username} />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <p>{location}</p>
      </div>
      <StatsList>
        <ProfileStatsItem>
          <GiHumanPyramid />
          <ProfileStatsLable> Followers: </ProfileStatsLable>
          <span>{followers}</span>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <FaEye />
          <ProfileStatsLable> Views: </ProfileStatsLable>
          <span>{views}</span>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <FcLike />
          <ProfileStatsLable> Likes: </ProfileStatsLable>
          <span>{likes}</span>
        </ProfileStatsItem>
      </StatsList>
    </ProfileCard>
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