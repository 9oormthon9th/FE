import MyButton from "../component/MyButton";
import { currentPos } from "../mocks/currentPos";
import TripRecommend from "./TripRecommend";
import CourseIntro from "./CourseIntro";

export default function Preview() {
  return (
    <TripRecommend centerPos={currentPos} />
  );
}
