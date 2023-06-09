import React, { useState } from "react";
import { VideoList } from "./VideoList";
import { VideoPlayer } from "./VideoPlayer";
import PropTypes from "prop-types";

export const Player = ({ course }) => {
  const { lessons } = course;
  console.log(lessons);
  const [currentVideo, setCurrentVideo] = useState(lessons[0]);

  const handleVideoSelect = (video) => {
    setCurrentVideo(video);
  };

  return (
    <div>
      <VideoPlayer video={currentVideo} />
      <VideoList videos={lessons} onSelect={handleVideoSelect} />
    </div>
  );
};

Player.propTypes = {
  course: PropTypes.shape({
    lessons: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};
