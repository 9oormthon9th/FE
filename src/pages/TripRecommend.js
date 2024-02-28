import React from 'react';
import { primaryColor } from '../theme/color';
import MarkeredMap from '../map/MarkeredMap.jsx';
import { useState, useEffect } from 'react';
import FullSearch from '../api/FullSearch';

const TripRecommend = ({ centerPos }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [recommendationList, setPlaces] = useState([]);
    const [currentPos, setCurrentPos] = useState({
        lat: 33.4495744,
        lng: 126.9235712,
    });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const newPos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                setCurrentPos(newPos);
                console.log('New current position:', newPos); // 바로 새로운 위치 정보를 로그로 출력
            });
        } else {
            alert('Geolocation을 사용할 수 없어요..');
        }
        FullSearch(
            [centerPos, centerPos, centerPos, centerPos, centerPos],
            '물회'
        )
            .then((data) => {
                setPlaces(data);
                setIsLoading(false);
            })
            .catch((error) => {
                // TODO: Error handling
                console.error(error);
                setIsLoading(false);
            });
    }, []);

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
        </div>
    );
};

export default TripRecommend;
