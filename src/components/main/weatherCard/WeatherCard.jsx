import styles from "./WeatherCard.module.css";

const WeatherCard = ({ key, card }) => {
   return (
      <div className={styles.card} key={key}>
         {card.name}
      </div>
   );
};

export default WeatherCard;
