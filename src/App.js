import React from "react";
import Poll from "./pages/Poll";
import { Routes, Route } from "react-router-dom";
import Preview from "./pages/Preview";
import Home from "./pages/Home";
import ResultPage from "./pages/ResultPage";
import Error from "./pages/Error";

function App() {
  console.log("Before xx");

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "//dapi.kakao.com/v2/maps/sdk.js?appkey=2ca3e874ab120943d901e338daef61ff&libraries=services,clusterer";
  script.async = true;
  script.dataset.cfasync = false;
  document.body.appendChild(script);
  script.addEventListener("load", () => {
    console.log("Script added successfully");
    //   resolve();
  });
  console.log("Pass Script add");

  return (
    <div className="flex h-screen bg-black justify-center">
      <div className="w-full md:w-[768px] bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/poll" element={<Poll />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
