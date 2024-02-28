import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useState } from "react";

export default function MarkeredMap({ centerPos, places }) {
  const [isOpen, setIsOpen] = useState(-1);

  console.log("PLACES", places);

  return (
    <Map
      center={{ lat: centerPos.lat, lng: centerPos.lng }}
      style={{ width: "100%", height: "360px" }}
      onClick={(_, mouseEvent) => {
        setIsOpen(-1);
      }}
    >
      {places.map((place, index) => (
        <MapMarker
          key={place.place_name}
          position={{ lat: place.y, lng: place.x }}
          clickable={true}
          onClick={() => setIsOpen(index)}
        >
          {isOpen === index && (
            <div className="bg-white p-2 rounded-lg">
              <div>{place.place_name}</div>
            </div>
          )}
        </MapMarker>
      ))}
    </Map>
  );
}
