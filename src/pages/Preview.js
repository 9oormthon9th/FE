import ready from "../backend/ready";
import MyButton from "../component/MyButton";
import { currentPos } from "../mocks/currentPos";
import ResultPage from "./ResultPage";

export default function Preview() {
  ready();
  return (
    <>PREIVEW</>
    // <ResultPage centerPos={currentPos} />
  );
}
