import styles from "./Main.module.css";
import { useEffect, useState } from "react";
import WeatherCard from "./weatherCard/WeatherCard";

const Main = ({ cities, location, setLocation }) => {
   const [weatherCards, setWeatherCards] = useState([]);

   useEffect(() => {
      const fetchWeather = async () => {
         const promises = cities.map(async (city) => {
            const res = await fetch(
               `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true&hourly=temperature_2m,relative_humidity_2m&timezone=Europe/Warsaw`
            );
            const data = await res.json();

            return {
               ...data,
               name: city.name,
            };
         });

         if (location) {
            const res = await fetch(
               `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&current_weather=true&hourly=temperature_2m,relative_humidity_2m&timezone=Europe/Warsaw`
            );
            const data = await res.json();
            promises.unshift(
               Promise.resolve({
                  ...data,
                  name: "Twoja lokalizacja",
               })
            );
         }

         const results = await Promise.all(promises);
         setWeatherCards(results);
      };

      if (cities.length > 0 || location) {
         fetchWeather();
      }
   }, [cities, location]);

   return (
      <main>
         <div className={styles.cardsWrapper}>
            {weatherCards.map((card, id) => (
               <WeatherCard
                  className={styles.card}
                  card={card}
                  key={id}
               ></WeatherCard>
            ))}
         </div>
      </main>
   );
};

export default Main;
