import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendListItem.styled';

function FriendListItem({ avatar, name, isOnline }){
    return (
        <Item>
            <Status isOnline={isOnline} />
            <Avatar src={avatar} alt="User avatar" width="48"/>
            <Name>{name}</Name>
        </Item>
    );
}

export default FriendListItem;

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
