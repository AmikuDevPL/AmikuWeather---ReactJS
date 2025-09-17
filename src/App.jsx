import Nav from "./components/nav/Nav.jsx";
import Main from "./components/main/Main.jsx";
import { useState, useEffect } from "react";

const App = () => {
   const [cities, setCities] = useState([
      {
         name: "Warszawa",
         lat: 52.2,
         lon: 21.033333,
      },
      {
         name: "Kraków",
         lat: 50.05,
         lon: 19.95,
      },
      {
         name: "Poznań",
         lat: 52.416667,
         lon: 16.916667,
      },
      {
         name: "Wrocław",
         lat: 51.116667,
         lon: 17.033333,
      },
      {
         name: "Łódź",
         lat: 51.783333,
         lon: 19.466667,
      },
      {
         name: "Katowice",
         lat: 50.25,
         lon: 19.0,
      },
   ]);

   const [location, setLocation] = useState(null);

   const onSelectCity = (city) => {
      setCities((prev) => [city, ...prev]);
   };

   const [darkMode, setDarkMode] = useState(false);
   useEffect(() => {
      if (darkMode) {
         document.body.classList.add("dark");
      } else {
         document.body.classList.remove("dark");
      }
   }, [darkMode]);

   return (
      <>
         <Nav
            onSelectCity={onSelectCity}
            setLocation={setLocation}
            setDarkMode={setDarkMode}
         />
         <Main
            cities={cities}
            location={location}
            setLocation={setLocation}
         ></Main>
      </>
   );
};

export default App;
