import PropTypes from 'prop-types';
import { ProfileWrp, Description, Avatar, Name, Tag, Location, Stats, Item, Label, Quantity} from './Profile.styled';

export const  Profile = ({user: {username, tag, location, avatar, stats}}) => {
    return (
        <ProfileWrp>
  <Description key={username}>
    <Avatar
      src={avatar}
      alt="User avatar"
    />
    <Name>{username}</Name>
    <Tag>@{tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <Stats>
    <Item>
      <Label>Followers</Label>
      <Quantity>{stats.followers}</Quantity>
    </Item>
    <Item>
      <Label>Views</Label>
      <Quantity>{stats.views}</Quantity>
    </Item>
    <Item>
      <Label>Likes</Label>
      <Quantity>{stats.likes}</Quantity>
    </Item>
  </Stats>
</ProfileWrp>
    );
    
}

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