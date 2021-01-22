import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

// darkmode-toggle tutorial
// https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../darkmode-toggle/theme";
import { GlobalStyles } from "../darkmode-toggle/global";
import Toggle from "../darkmode-toggle/Toggle";
import { useDarkMode } from "../darkmode-toggle/useDarkMode";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }
  return (
    <nav>
      <h1>Tunes</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </>
      </ThemeProvider>
    </nav>
  );
};

export default Nav;
