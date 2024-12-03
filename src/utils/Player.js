// src/utils/Player.js
import React from 'react';
import ReactPlayer from 'react-player';

const Player = ({ url, isPlaying, onPlayPause }) => {
  return (
    <div style={{ width: '100%', height: '50px', marginTop: '10px' }}>
      {isPlaying && (
        <ReactPlayer
          url={url}
          playing={true}
          controls={true}
          width="100%"
          height="50px"
        />
      )}
      {!isPlaying && (
        <button onClick={onPlayPause} style={{ width: '100%' }}>
          Play
        </button>
      )}
    </div>
  );
};

export default Player;
