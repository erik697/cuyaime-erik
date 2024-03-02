"use client";
import { XCircle } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";
const VideoPlayer = ({ youtubeId }: { youtubeId: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-5 right-5">
        <button
          onClick={handleVideoPlayer}
          className="text-color-primary float-right bg-color-secondary px-3"
        >
          X
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert("sorry video is broken")}
        />
      </div>
    );
  };

  const OpenTrailer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="fixed rounded bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all"
      >
        Tonton Trailer
      </button>
    );
  };
  return isOpen ? <Player /> : <OpenTrailer />;
};

export default VideoPlayer;
