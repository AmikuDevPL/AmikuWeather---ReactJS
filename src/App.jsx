import Nav from "./components/nav/Nav.jsx";
import { useState, useEffect } from "react";

const App = () => {
  const [cities, setCities] = useState([
    "Warszawa",
    "Kraków",
    "Poznań",
    "Wrocław",
    "Łódź",
    "Katowice",
  ]);

  const [location, setLocation] = useState(null);
  console.log(location);

  const onSelectCity = (city) => {
    setCities((prev) => [city, ...prev]);
  };

  useEffect(() => {
    console.log("Aktualne miasta:", cities);
  }, [cities]);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Nav
      onSelectCity={onSelectCity}
      setLocation={setLocation}
      setDarkMode={setDarkMode}
    />
  );
};

export default App;
