import React, { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Example from '../mordal/Example';
import redMarker from '../mocks/images/2.jpg';

export default function MarkeredMap({ centerPos, currentPos, places }) {
    const [isOpen, setIsOpen] = useState(-1);
    const [placeId, setPlaceId] = useState('');
    const url = `https://place.map.kakao.com/${placeId}`;

    const [exampleModalOpen, setExampleModalOpen] = useState(false);

    const handleModal = () => {
        setExampleModalOpen(true);
    };

    console.log('PLACES', places);
    console.log('center', centerPos);
    console.log('current', currentPos);
    return (
        <>
            <Map
                center={{ lat: centerPos.lat, lng: centerPos.lng }}
                style={{ width: '100%', height: '360px', borderRadius: '6px' }}
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
                            <div className='-translate-y-16 bg-[#E1E1E8] p-[4px]'>
                                {place.place_name}
                            </div>
                        )}
                    </>
                ))}
                <MapMarker
                    position={{ lat: currentPos.lat, lng: currentPos.lng }}
                    image={{
                        src: redMarker, // 빨간색 마커 이미지 사용
                        size: {
                            width: 24,
                            height: 32,
                        }, // 마커 이미지의 크기
                    }}
                />
                <MapMarker
                    position={centerPos}
                    image={{
                        src: redMarker, // 빨간색 마커 이미지 사용
                        size: {
                            width: 24,
                            height: 32,
                        }, // 마커 이미지의 크기
                    }}
                />
            </Map>
            <div onClick={handleModal}>예시모달</div>
            {exampleModalOpen && (
                <Example setExampleModalOpen={setExampleModalOpen} url={url} />
            )}
        </>
    );
}
