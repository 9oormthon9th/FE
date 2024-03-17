import React from 'react';
import MarkeredMap from '../map/MarkeredMap.jsx';
import { useState, useEffect } from 'react';
import FullSearch from '../kakaoApi/FullSearch.js';
import Example from '../mordal/Example.js';
import { getFood } from '../localstorage/auth.js';

const TripRecommend = ({ startPos, endPos, centerPos }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [recommendationList, setPlaces] = useState([]);
  const [currentPos, setCurrentPos] = useState({
    lat: 33.4495744,
    lng: 126.9235712,
  });

  const [exampleModalOpen, setExampleModalOpen] = useState(false);
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const food = getFood();
  const handleClick = (url, name) => {
    setExampleModalOpen(true);
    setUrl(url);
    setName(name);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const newPos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setCurrentPos(newPos);
      });
    } else {
      alert('Geolocation을 사용할 수 없어요..');
    }
    FullSearch([startPos, centerPos, centerPos, endPos, endPos], food)
      .then((data) => {
        setPlaces(data);
        setIsLoading(false);
      })
      .catch((error) => {
        // TODO: Error handling
        console.error(error);
        setIsLoading(false);
      });
  }, [startPos, centerPos, endPos, food]);

  const placeList = recommendationList.map(
    (recommendation) => recommendation.place
  );
  return (
    <div className='space-y-4'>
      <div className='text-lg font-bold'>추천 일정</div>
      <MarkeredMap
        centerPos={centerPos}
        currentPos={currentPos}
        places={!isLoading ? placeList : []}
      />
      <div className='space-y-3'>
        {recommendationList.map((recommendation, index) => (
          <div
            key={index}
            className='flex h-16 rounded-lg bg-[#F2F4F6]'
            onClick={() => {
              let url_https = recommendation.place.place_url.replace(
                /^http:\/\//i,
                'https://'
              );
              handleClick(url_https, recommendation.place.place_name);
            }}
            style={{ cursor: 'pointer' }}
          >
            <div className='w-20 flex'>
              <div className='m-auto text-sm text-[#858899]'>
                {recommendation.label}
              </div>
            </div>
            <div className='flex'>
              <div className='m-auto font-bold'>
                {recommendation.place.place_name}
              </div>
            </div>
          </div>
        ))}
      </div>
      {exampleModalOpen && (
        <Example
          url={url}
          name={name}
          setExampleModalOpen={setExampleModalOpen}
        />
      )}
    </div>
  );
};

export default TripRecommend;
