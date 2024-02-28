import React from 'react';
import { useNavigate } from 'react-router-dom';
import { primaryColor } from '../theme/color';

export default function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/poll');
    };

    return (
        <div className='flex flex-col h-screen' onClick={handleClick}>
            <div
                className={`flex flex-col flex-[1] justify-end text-[${primaryColor}] jeju-font items-center`}
            >
                <div>걸음으로</div>
                <div className='mb-4'>만나는 제주</div>
            </div>
            <div
                className={`flex flex-col flex-[2.5] text-3xl bg-[${primaryColor}] text-white jeju-font items-center`}
            >
                <div className='mt-4'>걸엉가게</div>
            </div>
        </div>
    );
}
