import styles from "./GetLocation.module.css";

const GetLocation = ({ setLocation }) => {
  const askForLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const latlon = { lon: lon, lat: lat };
          setLocation(latlon);
        },
        () => {
          alert("Błąd geolokalizacji:");
        }
      );
    } else {
      alert("Geolokalizacja nie jest wspierana w tej przeglądarce");
    }
  };

  return (
    <button onClick={askForLocation} className={styles.getLocation}>
      Dodaj swoją lokalizację
    </button>
  );
};

export default GetLocation;
