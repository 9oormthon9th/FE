import { currentPos } from "../mocks/currentPos";
import TripRecommend from "./TripRecommend";

export default function Preview() {
  return (
    <TripRecommend centerPos={currentPos} />
  );
}
