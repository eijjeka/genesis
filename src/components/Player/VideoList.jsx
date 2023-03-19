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
