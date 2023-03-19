import React, { useState } from "react";
import { VideoList } from "./VideoList";
import { VideoPlayer } from "./VideoPlayer";

export const Player = ({ course }) => {
  const { lessons } = course;
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
