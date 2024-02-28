import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import { useState } from "react";

export default function MarkeredMap({ centerPos, places }) {
  const [isOpen, setIsOpen] = useState(-1);
  const [placeId, setPlaceId] = useState("");
  const url = `https://place.map.kakao.com/${placeId}`;

  console.log("PLACES", places);

  return (
    <>
      <Map
        center={{ lat: centerPos.lat, lng: centerPos.lng }}
        style={{ width: "100%", height: "360px" }}
        onClick={(_, mouseEvent) => {
          setIsOpen(-1);
        }}
      >
        {places.map((place, index) => (
          <>
            <MapMarker
              key={place.place_name}
              position={{ lat: place.y, lng: place.x }}
              clickable={true}
              onClick={() => {
                setIsOpen(index);
                setPlaceId(place.id);
              }}
            ></MapMarker>
            {isOpen === index && (
              <CustomOverlayMap position={{ lat: place.y, lng: place.x }}>
                <div className="-translate-y-16 bg-[#E1E1E8] p-[4px]">
                  {place.place_name}
                </div>
              </CustomOverlayMap>
            )}
          </>
        ))}
      </Map>
      <iframe id="iFrameExample" title="iFrame Example" src={url}></iframe>
    </>
  );
}
