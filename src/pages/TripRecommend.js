import React from "react";
import { primaryColor } from "../theme/color";
import MarkeredMap from "../map/MarkeredMap.jsx";
import { places } from "../mocks/places.js";

const TripRecommend = () => {
  return (
    <div className="p-12 space-y-4">
      <h1 className={`text-3xl jeju-font text-[${primaryColor}]`}>
        6 코스 추천 일정
      </h1>
      <MarkeredMap places={places} />
      <div className="space-y-4">
        {places.map((place, index) => (
          <div className="flex h-12 rounded bg-[#F2F4F6]">
            <div className="w-16 flex">
              <div className="m-auto">HI</div>
            </div>
            <div className="flex">
              <div className="m-auto font-bold">{place.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripRecommend;
