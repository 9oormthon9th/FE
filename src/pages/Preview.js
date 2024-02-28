import MyButton from "../component/MyButton";
import { currentPos } from "../mocks/currentPos";
import ResultPage from "./ResultPage";

export default function Preview() {
  return (
    <ResultPage centerPos={currentPos} />
  );
}
