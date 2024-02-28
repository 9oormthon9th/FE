import React from 'react';
import Poll from './pages/Poll';
import { Routes, Route } from 'react-router-dom';
import Preview from './pages/Preview';
import Home from './pages/Home';
import ResultPage from './pages/ResultPage';

function App() {
    return (
        <div className='flex h-screen bg-black justify-center'>
            <div className='w-full md:w-[768px] bg-white'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/poll' element={<Poll />} />
                    <Route path='/preview' element={<Preview />} />
                    <Route path='/result' element={<ResultPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
