"use client";

import { useEffect, useState } from "react";
import LocationMap from "../molecules/LocationMap";
import { formatDate } from "@/utils/dateFormater";
import axios from "axios";

export default function MapControll() {
  

  const [invitedEvents, setEvents] = useState([]);
  const mapboxApiAccessToken =
    "pk.eyJ1IjoiZGFuaWNvbnN0YW50aW5lc2N1IiwiYSI6ImNsZmlqbnQzNjBvY28zdnJzNngwenR5eGUifQ.ndMG1zy0dwxO-104cKuaZA";

  useEffect(() => {
    async function fetchUndiscoveredEvents() {
      setEvents(
        (
          await axios.get("http://localhost:5000/events/upcoming", {
            withCredentials: true,
          })
        ).data.events
      );
    }
    fetchUndiscoveredEvents();
  }, []);

  const [Loaded, setLoaded] = useState(false);
  const [coords, setCoords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newCoords = [];

      for (const loc of invitedEvents) {
        const coords = await getCoords(loc.location);
        newCoords.push(coords);
      }
      setCoords(newCoords);
    };
    fetchData();
    setLoaded(true)
  }, [invitedEvents]);

  const getCoords = async (locationName) => {
    // const mapboxApiAccessToken = mapKey;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${locationName}.json?limit=1&proximity=21.2272%2C45.7494&language=ro&access_token=${mapboxApiAccessToken}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      return data.features[0].geometry.coordinates;
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  return (
    Loaded && <LocationMap locations={invitedEvents} coords={coords} mapKey={mapboxApiAccessToken} />
  );
}
