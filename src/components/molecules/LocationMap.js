"use client";

import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "@/app/events/events.module.css";
import { useEffect, useMemo, useState } from "react";
import MapPin from "../atoms/MapPin";
import { formatDate } from "@/utils/dateFormater";

function combineData(locations, coords) {
    if (locations.length !== coords.length) {
        throw new Error("Locations and coords arrays must have the same length");
    }

    return locations.map((location, index) => {
        return {
            date: location.date,
            description: location.description,
            location: location.location,
            title: location.title,
            longitude: coords[index][0],
            latitude: coords[index][1],
        };
    });
}

export default function LocationMap({ locations, coords, mapKey }) {

    const [Locations, setLocations] = useState([]);
    const [popupInfo, setPopupInfo] = useState(null);

    useEffect(() => {
        const combinedData = combineData(locations, coords);
        setLocations(combinedData);
    }, []);


    const [viewState, setViewState] = useState({
        width: "100%",
        longitude: 21.228031,
        latitude: 45.756414,
        zoom: 13.8,
    });

    const pins = useMemo(() => {

        console.log("Locations");
        Locations.map( (x) => console.log(x.latitude) )

        return Locations.map((location, index) => (
            <Marker
                key={`marker-${index}`}
                longitude={Number(location.longitude)}
                latitude={Number(location.latitude)}

                anchor="bottom"
                onClick={(e) => {
                    e.originalEvent.stopPropagation();
                    setPopupInfo(location);
                }}
            >
                <MapPin />
            </Marker>
        ));
    }, []);

    return (
        <div className={styles.mapContainer}>

            <Map
                mapboxAccessToken={mapKey}
                {...viewState}
                onMove={(evt) => setViewState(evt.viewState)}
                mapStyle="mapbox://styles/daniconstantinescu/clkjpaju000d901qpa9wjas3s"
            >
                {pins}

                {popupInfo && (
                    <Popup
                        anchor="top"
                        longitude={Number(popupInfo.longitude)}
                        latitude={Number(popupInfo.latitude)}
                        onClose={() => setPopupInfo(null)}
                    >
                        <div>
                            <p>Title: {popupInfo.title}</p>
                            <p>Date: { formatDate(popupInfo.date)}</p>
                            <p>Location: {popupInfo.location}</p>
                            <p>Description: {popupInfo.description}</p>
                        </div>
                    </Popup>
                )}
            </Map>
        </div>
    );
}
