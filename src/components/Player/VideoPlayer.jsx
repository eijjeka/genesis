import { useState } from "react";
import { Container, Video, Title } from "./Player.styled";
import PropTypes from "prop-types";

export const VideoPlayer = ({ video }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleTimeUpdate = (event) => {
    const currentTime = event.target.currentTime;
    localStorage.setItem(video.id, currentTime);
    setCurrentTime(currentTime);
  };

  return (
    <Container>
      {video.status === "locked" ? (
        <h1>Sorry this videos is locked</h1>
      ) : (
        <>
          <Video
            controls
            poster={video.previewImageLink}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={(event) => {
              setDuration(event.target.duration);
              const savedTime = localStorage.getItem(video.id);
              if (savedTime) {
                event.target.currentTime = savedTime;
              }
            }}
          >
            <source src={video.link} type="application/x-mpegURL" />
            Sorry, your browser doesn't support embedded videos.
          </Video>
          <Title>{video.title}</Title>
        </>
      )}
    </Container>
  );
};

VideoPlayer.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string,
  }).isRequired,
};
