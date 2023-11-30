// MusicList.js
import React, { useEffect, useState } from 'react';
import musicListJsonFile from '../../data/musicList.json';

const getArtistAndMusic = (fileName) => {
  const [artist, musicName] = fileName.split(' - ');
  return { artist, musicName };
};

const MusicList = ({ onPlay }) => {
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    // Assuming musicListJson is a valid array of objects
    setMusicList(musicListJsonFile);
  }, []);
  

  return (
    <div>
      <h1>Music List</h1>
      <ul>
        {musicList.map((music) => (
          <li key={music.path}>
            {getArtistAndMusic(music.name).artist} - {getArtistAndMusic(music.name).musicName}
            <button onClick={() => onPlay(music)}>Play</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicList;
