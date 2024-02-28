import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useState } from "react";

export default function MarkeredMap({places}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: "100%", height: "360px" }}
      onClick={(_, mouseEvent) => {
        setIsOpen(false);
      }}
    >
      {places.map((place, index) => (
        <MapMarker
          key={place.title}
          position={{ lat: place.lat, lng: place.lng }}
          // clickable={true}
          // onClick={() => setIsOpen(true)}
        />
      ))}
    </Map>
  );
}
