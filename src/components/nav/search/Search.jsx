import styles from "./Search.module.css";
import { useState } from "react";
import citiesData from "./cities.json";

const Search = ({ onSelectCity }) => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.length > 0) {
      const filtered = citiesData.filter((city) =>
        city.name.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (city) => {
    setInput("");
    setSuggestions([]);
    onSelectCity(city);
  };

  return (
    <div className={styles.searchArea}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Wyszukaj miasto"
      />
      {suggestions.length > 0 && (
        <ul className={styles.suggestions}>
          {suggestions.map((city, id) => (
            <li
              key={id}
              className={styles.suggestionItem}
              onClick={() => handleSelect(city)}
            >
              {city.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
