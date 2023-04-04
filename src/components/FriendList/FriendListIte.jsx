import PropTypes from "prop-types";
import { ListItem, Status, ItemAva, FriendName } from './FriendLists-stale';

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
      <ListItem>
        <Status isOnline={isOnline}></Status>
        <ItemAva src={avatar} alt="User avatar" />
        <FriendName>{name}</FriendName>
      </ListItem>
    );
    };

    FriendListItem.propTypes = {
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    };