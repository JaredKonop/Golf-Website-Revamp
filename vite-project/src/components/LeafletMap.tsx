import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "../components/styles/Leaflet.module.css";

const LeafletMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      const map = L.map(mapRef.current, {
        center: [40.5536, -80.0451], // Pittsburgh, PA
        zoom: 12,
      });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([40.5536, -80.0451])
        .addTo(map)
        .bindPopup("Clover Hill Golf")
        .openPopup();

      mapInstanceRef.current = map;
    }
  }, []);

  return <div ref={mapRef} className={styles.map}></div>;
};

export default LeafletMap;
