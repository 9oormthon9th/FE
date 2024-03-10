import React, { useState } from 'react';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';

export default function MarkeredMap({ centerPos, currentPos, places }) {
  const [isOpen, setIsOpen] = useState(-1);

  return (
    <Map
      center={{ lat: centerPos.lat, lng: centerPos.lng }}
      style={{ width: '100%', height: '360px', borderRadius: '6px' }}
      onClick={(_, mouseEvent) => {
        setIsOpen(-1);
      }}
      level={7}
    >
      {places.map((place, index) => (
        <React.Fragment key={place.place_name}>
          <MapMarker
            position={{ lat: place.y, lng: place.x }}
            clickable={true}
            onClick={() => {
              setIsOpen(index);
            }}
          ></MapMarker>
          {isOpen === index && (
            <CustomOverlayMap position={{ lat: place.y, lng: place.x }}>
              <div className='-translate-y-16 bg-[#E1E1E8] p-[4px]'>
                {place.place_name}
              </div>
            </CustomOverlayMap>
          )}
        </React.Fragment>
      ))}
    </Map>
  );
}
