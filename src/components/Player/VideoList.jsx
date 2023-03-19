import PropTypes from "prop-types";
import { List, Item, ListTitle } from "./Player.styled";

export const VideoList = ({ videos, onSelect }) => {
  return (
    <>
      <ListTitle>Click to watch any videos👇</ListTitle>
      <List>
        {videos.map((video) => (
          <Item key={video.id} onClick={() => onSelect(video)}>
            <h4>{video.title}</h4>
          </Item>
        ))}
      </List>
    </>
  );
};

VideoList.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};
