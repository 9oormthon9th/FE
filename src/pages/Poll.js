import React from 'react';
import InputLine from '../component/InputLine';

export default function Poll() {
    return (
        <div className='flex flex-col m-4'>
            <div className='flex text-xl text-green-600 mb-40 mt-8'>
                걸엉가게
            </div>
            <div className='mb-4 mt-4'>가고싶은 올레길을 알려주세요</div>
            <InputLine
                placeholder='#바다가보이는'
            />
            <div className='mb-4 mt-4'>먹고싶은 음식을 알려주세요</div>
            <InputLine
                placeholder='#돼지고기'
            />
        </div>
    );
}
