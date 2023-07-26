import React, { useState } from "react";
import styles from "@/css/adminPanel.module.css"


const LocationSearchBar = ({changeLocation}) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  

  const handleInputChange = async (e) => {
    const input = e.target.value;
    setQuery(input);

    // Perform the search using Mapbox Geocoding API
    const mapboxApiAccessToken = "pk.eyJ1IjoiZGFuaWNvbnN0YW50aW5lc2N1IiwiYSI6ImNsZmlqbnQzNjBvY28zdnJzNngwenR5eGUifQ.ndMG1zy0dwxO-104cKuaZA";
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${input}.json?proximity=21.2272%2C45.7494&language=ro&access_token=${mapboxApiAccessToken}`;


    try {
      const response = await fetch(url);
      const data = await response.json();
      setSuggestions(data.features);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    changeLocation(suggestion)

    setQuery(suggestion)
    setSuggestions([])
  }

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Enter a location"
      />
      {suggestions.length > 0 && (
        <div className={styles.suggestionContainer}>
          {suggestions.map((suggestion) => (
            <div onClick={ () => handleSelectSuggestion(suggestion.place_name) } className={styles.suggestion} key={suggestion.id} value={suggestion.place_name}>
              {suggestion.place_name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationSearchBar;
