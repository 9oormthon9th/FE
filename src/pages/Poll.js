import React, { useState } from 'react';
import InputLine from '../component/InputLine';
import { primaryColor } from './../theme/color';
import MyButton from './../component/MyButton';

export default function Poll() {
    const [answer, setAnswer] = useState('');
    const [food, setFood] = useState('');
    const [buttonEnabled, setButtonEnabled] = useState(true);

    const handleClick = () => {
        console.log(1);
    };

    const handleAnswerChange = (event) => {
        const newAnswer = event.target.value;
        setAnswer(newAnswer.startsWith('#') ? newAnswer : `#${newAnswer}`);
        checkConditions(newAnswer);
    };

    const handleFoodChange = (event) => {
        const newFood = event.target.value;
        setFood(newFood.startsWith('#') ? newFood : `#${newFood}`);
    };

    const checkConditions = (answer) => {
        if (answer.length > 1 || (answer.length === 1 && answer[0] !== '#')) {
            setButtonEnabled(false);
        } else {
            setButtonEnabled(true);
        }
    };

    return (
        <div className='flex flex-col m-4'>
            <div
                className={`flex text-4xl text-[${primaryColor}] jeju-font mb-40 mt-8`}
            >
                걸엉가게
            </div>
            <div className='mb-4 mt-4'>가고싶은 올레길을 알려주세요</div>
            <div className='flex'>
                <input
                    className='border-none focus:border-transparent outline-none'
                    placeholder={'#바다가보이는'}
                    value={answer}
                    onChange={handleAnswerChange}
                />
            </div>
            <div className='bg-black h-[1px] my-2'></div>
            <div className='mb-4 mt-4'>먹고싶은 음식을 알려주세요</div>
            <InputLine
                placeholder='#돼지고기'
                value={food}
                onChange={handleFoodChange}
            />
            <div className='m-8' />
            <MyButton
                text={'확인'}
                onClick={handleClick}
                disabled={buttonEnabled}
            />
        </div>
    );
}
