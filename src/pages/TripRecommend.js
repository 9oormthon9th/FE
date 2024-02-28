import React from "react";
import { primaryColor } from "../theme/color";
import MarkeredMap from "../map/MarkeredMap.jsx";
// import { places } from "../mocks/places.js";
import CategorySearchOneAsync from "../api/CategorySearchOneAsync.js";
import { useState, useEffect } from "react";

const TripRecommend = ({ centerPos }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [place, setPlace] = useState(null);
  useEffect(() => {
    CategorySearchOneAsync(centerPos).then((data) => {
      setPlace(data);
      setIsLoading(false);
    }).catch((error) => {
      // TODO: Error handling
      console.error(error);
      setIsLoading(false);
    });
  }, []);
  
  let places = (place !== null) ? [place, place] : [];
  
  return (
    <div className="p-12 space-y-4">
      <h1 className={`text-3xl jeju-font text-[${primaryColor}]`}>
        6 코스 추천 일정
      </h1>
      <MarkeredMap centerPos={centerPos} places={(!isLoading) && (place !== null) ? [place] : []} />
      <div className="space-y-4">
        {places.map((place, index) => (
          <div key={index} className="flex h-12 rounded bg-[#F2F4F6]">
            <div className="w-16 flex">
              <div className="m-auto">HI</div>
            </div>
            <div className="flex">
              <div className="m-auto font-bold">{place.place_name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripRecommend;
