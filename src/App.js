import React, { useRef, useState } from "react";
// import styles
import "./styles/app.scss";
// import components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
// import data
import data from "./data";
// darkmode-toggle tutorial
// https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./darkmode-toggle/theme";
import { GlobalStyles } from "./darkmode-toggle/global";
import Toggle from "./darkmode-toggle/Toggle";
import { useDarkMode } from "./darkmode-toggle/useDarkMode";

function App() {
  // Ref - used to grab references to DOMs in React.
  const audioRef = useRef(null);

  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration }); // duration is short for duration: duration
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);

    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);

    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
      />
      <Library
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler} //when info of song loads, load and display the currentTime and duration
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
      <span>Credits:</span>
      <small>
        <b>Sun</b> icon made by{" "}
        <a href="https://www.flaticon.com/authors/smalllikeart">smalllikeart</a>{" "}
        from <a href="https://www.flaticon.com">www.flaticon.com</a>
      </small>
      <small>
        <b>Moon</b> icon made by{" "}
        <a href="https://www.freepik.com/home">Freepik</a> from{" "}
        <a href="https://www.flaticon.com">www.flaticon.com</a>
      </small>
    </div>
  );
}

export default App;
