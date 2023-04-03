import PropTypes from "prop-types";

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <>
        <span isOnline={isOnline}></span>
        <img src={avatar} alt="User avatar" width="48" />
         <p>{name}</p>
         </>
        );
    };

    FriendListItem.propTypes = {
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    };