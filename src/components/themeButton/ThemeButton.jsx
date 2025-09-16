import styles from "./ThemeButton.module.css";

const ThemeButton = ({ setDarkMode }) => {
  return (
    <button onClick={() => setDarkMode((prev) => !prev)}>
      <div className={styles.ball}></div>
    </button>
  );
};

export default ThemeButton;
