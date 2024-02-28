import React, { Image } from "react";
import MyButton from "../component/MyButton";
import mock_image from "../mocks/images/2.jpg";

const CourseIntro = () => {
  return (
    <div className="p-12 space-y-4">
      <h1 className="text-3xl">6 코스를 추천해드리고 싶어요</h1>
      <div className="space-y-4">
        <img src={mock_image} alt="Course 6" className="w-full" />
        <p>
          해안가의 정취를 느낄 수 있는 소금막과 삶과 문화가 숨쉬는 서귀포 시내를
          걸으며 서귀포의 문화와 생태를 접할 수 있는 코스예요.
        </p>
        <p>
          서귀포 칼호텔 바당길과 허니문하우스 전망대 길에서 푸른 바다의
          파노라마를 즐겨보세요.
        </p>
      </div>
      <MyButton text="자세히 보기" onClick={() => {}} />
    </div>
  );
};

export default CourseIntro;
