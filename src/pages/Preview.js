import testGpt from "../backend/testGpt";

export default function Preview() {
  testGpt("바다").then((result) => {
    console.log(result);
  });
  return (
    <>PREIVEW</>
    // <ResultPage centerPos={currentPos} />
  );
}
