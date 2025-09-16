import styles from "./Nav.module.css";
import Search from "./search/Search.jsx";
import GetLocation from "./getLocation/GetLocation.jsx";
import ThemeButton from "./themeButton/ThemeButton.jsx";

const Nav = ({ onSelectCity, setLocation, setDarkMode }) => {
  return (
    <nav>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="logo" />
        </div>
        <div className={styles.searchCity}>
          <Search onSelectCity={onSelectCity}></Search>
        </div>
        <div className={styles.locationAndTheme}>
          <GetLocation setLocation={setLocation}></GetLocation>
          <ThemeButton setDarkMode={setDarkMode}></ThemeButton>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
