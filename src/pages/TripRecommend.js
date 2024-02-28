import React from "react";
import { primaryColor } from "../theme/color";
import MarkeredMap from "../map/MarkeredMap.jsx";
import { useState, useEffect } from "react";
import FullSearch from "../api/FullSearch";

const TripRecommend = ({ centerPos }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [recommendationList, setPlaces] = useState([]);
  useEffect(() => {
    FullSearch([centerPos, centerPos, centerPos, centerPos, centerPos], "물회")
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
    <div className="p-12 space-y-4">
      <h1 className={`text-3xl jeju-font text-[${primaryColor}]`}>
        6 코스 추천 일정
      </h1>
      <MarkeredMap centerPos={centerPos} places={!isLoading ? placeList : []} />
      <div className="space-y-4">
        {recommendationList.map((recommendation, index) => (
          <div key={index} className="flex h-16 rounded-lg bg-[#F2F4F6]">
            <div className="w-20 flex">
              <div className="m-auto text-sm text-[#858899]">
                {recommendation.label}
              </div>
            </div>
            <div className="flex">
              <div className="m-auto font-bold">
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
