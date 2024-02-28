import React, { useState } from 'react';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';

export default function MarkeredMap({ centerPos, currentPos, places }) {
    const [isOpen, setIsOpen] = useState(-1);
    const [placeId, setPlaceId] = useState('');

    console.log('PLACES', places);
    console.log('center', centerPos);
    console.log('current', currentPos);
    return (
      <>
        <Map
          center={{ lat: centerPos.lat, lng: centerPos.lng }}
          style={{ width: "100%", height: "360px", borderRadius: "6px" }}
          onClick={(_, mouseEvent) => {
            setIsOpen(-1);
          }}
          level={7}
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
      </>
    );
}
