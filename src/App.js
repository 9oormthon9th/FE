import React from 'react';
import Poll from './pages/Poll';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className='flex h-screen bg-white justify-center'>
            <div className='w-1/4 min-w-350 bg-white'>
                <Routes>
                    <Route path='/poll' element={<Poll />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
