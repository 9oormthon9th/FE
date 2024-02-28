import ready from "../backend/ready";
import testGpt from "../backend/testGpt";
import MyButton from "../component/MyButton";
import { currentPos } from "../mocks/currentPos";
import ResultPage from "./ResultPage";

export default function Preview() {
  testGpt("바다");
  return (
    <>PREIVEW</>
    // <ResultPage centerPos={currentPos} />
  );
}
