import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
// import "leaflet-routing-machine/dist/leaflet-routing-machine.js";
import { useMap } from "react-leaflet";
export default function LeafletRoutingMachine() {
  const map = useMap();

  useEffect(() => {
    L.Routing.control({
      waypoints: [L.latLng(57.74, 11.94), L.latLng(57.6792, 11.949)],
      lineOptions: {
        styles: [{ color: "blue", opacity: 1, weight: 5 }],
      },
      routeWhileDragging: false,
      geocoder: L.Control.Geocoder.nominatim(),
      addWaypoints: false,
      draggableWaypoints: true,
      fitSelectedRoutes: true,
      showAlternatives: false,
    }).addTo(map);
  }, []);
  return null;
}
