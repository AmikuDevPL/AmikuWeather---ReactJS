import styles from "./Main.module.css";
import { useEffect, useState } from "react";

const Main = ({ cities }) => {
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

      const results = await Promise.all(promises);
      setWeatherCards(results);
    };

    if (cities.length > 0) {
      fetchWeather();
    }
  }, [cities]);

  return (
    <main>
      {weatherCards.map((card) => (
        <div>{card.name}</div>
      ))}
    </main>
  );
};

export default Main;
