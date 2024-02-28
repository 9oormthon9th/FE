import React from 'react';
import Poll from './pages/Poll';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
      <div className="flex h-screen bg-purple-500 justify-center">
        <div className="w-full md:w-[768px] bg-white">
          <Routes>
            <Route path="/poll" element={<Poll />} />
          </Routes>
        </div>
      </div>
    );
}

export default App;
