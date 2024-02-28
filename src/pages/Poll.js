import React, { useState, useEffect } from 'react';
import InputLine from '../component/InputLine';
import MyButton from './../component/MyButton';
import Title from '../component/Title';
import { useNavigate } from 'react-router-dom';
import Loading from '../mordal/Loading';
import { getAnswer, getFood, setInfo } from '../localstorage/auth';
import testGpt from '../backend/testGpt';

export default function Poll() {
    const [answer, setAnswer] = useState(() => {
        return getAnswer() || '';
    });

    const [food, setFood] = useState(() => {
        return getFood() || '';
    });

    const [buttonEnabled, setButtonEnabled] = useState(
        getAnswer() || getFood() ? false : true
    );
    const [loadingModalOpen, setLoadingModalOpen] = useState(false); // 로딩 상태 추가
    const [response, setResponse] = useState(null); // 백엔드 응답 상태 추가

    const navigate = useNavigate();

    const handleClick = async () => {
        setLoadingModalOpen(true); // 로딩 모달을 열어줍니다.

        const theme = answer.substring(1);
        const {valid, result} = await testGpt(theme);
        
        if (!valid) {
            navigate('/error');
            return;
        }

        const randomDelay =
            // Math.floor(Math.random() * (15000 - 8000 + 1)) + 8000;
            2000;

        setTimeout(() => {
            setLoadingModalOpen(false);

            navigate('/result', {
                state: {
                    image1: result.image1,
                    courseName: result.courseNumber,
                    startPos: {
                        lat: result.startLat,
                        lng: result.startLng,
                    },
                    endPos: {
                        lat: result.endLat,
                        lng: result.endLng,
                    },
                    centerPos: {
                        lat: (result.startLat + result.endLat) / 2,
                        lng: (result.startLng + result.endLng) / 2,
                    },
                    description: result.description,
                },
            });

            setInfo(answer, food);
        }, randomDelay);
    };

    const styleAnswer = (answer) => {
        const prefixed = answer.startsWith('#') ? answer : `#${answer}`;
        // const erased = prefixed.length === 1 ? '' : prefixed;
        return prefixed;
    };

    const handleAnswerChange = (event) => {
        const newAnswer = styleAnswer(event.target.value);
        setAnswer(newAnswer);
        checkConditions();
    };

    const handleFoodChange = (event) => {
        const newFood = event.target.value;
        setFood(newFood.startsWith('#') ? newFood : `#${newFood}`);
        checkConditions();
    };

    const checkConditions = () => {
        if (food.length > 0 && answer.length > 0) {
            setButtonEnabled(false);
        } else {
            setButtonEnabled(true);
        }
    };

    return (
        <div className='flex flex-col m-4'>
            {loadingModalOpen ? (
                <Loading />
            ) : (
                <>
                    <Title text={'걸엉가게'} />
                    <div className='mb-4 mt-4'>
                        가고싶은 올레길을 알려주세요
                    </div>
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
                    <div className='m-5' />
                    <MyButton
                        text={'일정 생성하기'}
                        onClick={handleClick}
                        disabled={buttonEnabled}
                    />
                </>
            )}
        </div>
    );
}
