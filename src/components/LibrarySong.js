import React from "react";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  setSongs,
  id,
  audioRef,
  isPlaying,
}) => {
  // Event Handler
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    // Add active state to current song and false to unactive songs
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return { ...song, active: true };
      } else {
        return { ...song, active: false };
      }
    });

    setSongs(newSongs);
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
