import React, { useState, useEffect } from 'react';
import InputLine from '../component/InputLine';
import MyButton from './../component/MyButton';
import Title from '../component/Title';
import { useNavigate } from 'react-router-dom';
import Loading from '../mordal/Loading';
import Example from '../mordal/Example';
import { getAnswer, getFood, setInfo } from '../localstorage/auth';

export default function Poll() {
    const [answer, setAnswer] = useState(() => {
        return getAnswer() || '';
    });

    const [food, setFood] = useState(() => {
        return getFood() || '';
    });
    const [buttonEnabled, setButtonEnabled] = useState(true);
    const [loading, setLoading] = useState(false); // 로딩 상태 추가
    const [response, setResponse] = useState(null); // 백엔드 응답 상태 추가

    const navigate = useNavigate();

    const handleClick = async () => {
        setLoading(true);

        // try {
        //     const response = await fetch('백엔드 URL', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ answer: answer, food: food }),
        //     });

        //     const data = await response.json();

        //     setResponse(data);
        // } catch (error) {
        //     console.error('백엔드 요청 실패:', error);
        //     setResponse({ error: '일정 생성에 실패했습니다.' });
        // } finally {
        //     setLoading(false);
        // }
        navigate('/result', {
            state: {
                startPos: {
                    lat: 33.55635,
                    lng: 126.795841,
                },
                endPos: {
                    lat: 33.45241,
                    lng: 126.795841,
                },
                centerPos: { lat: 33.49999, lng: 126.795841 },
                description:
                    'ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ',
            },
        });
        setLoading(false);

        setInfo(answer, food);
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

    useEffect(() => {
        if (response) {
            navigate('/');
            console.log('백엔드 응답:', response);
        }
    }, [response]);

    return (
        <div className='flex flex-col m-4'>
            <Title text={'걸엉가게'} />
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
                text={'일정 생성하기'}
                onClick={handleClick}
                disabled={buttonEnabled}
            />
        </div>
    );
}
