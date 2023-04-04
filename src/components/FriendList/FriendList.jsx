import PropTypes from "prop-types";
import { FriendListItem } from "./FriendListIte";
import { FriendUl } from "./FriendLists-stale";

export const FriendLists = ({friends}) => {
  return (
    <FriendUl>
      {friends.map(friend => (
          <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          />
      ))}
    </FriendUl>
  );
};

FriendLists.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
