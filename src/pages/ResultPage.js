import CourseIntro from "./CourseIntro";
import TripRecommend from "./TripRecommend";
import MyButton from "../component/MyButton";

const ResultPage = ({ centerPos }) => {
  return (
    <div className="p-12">
      <CourseIntro centerPos={centerPos} />

      <hr className="my-8 border-none h-[1px] bg-[#cdced6]" />

      <TripRecommend centerPos={centerPos} />
      
      <hr className="my-3 border-none" />
      
      <MyButton text="다시 추천받기" onClick={() => {}} variant />
    </div>
  );
};

export default ResultPage;
