import React, { useState, useEffect } from 'react';
import InputLine from '../component/InputLine';
import MyButton from './../component/MyButton';
import Title from '../component/Title';
import { useNavigate } from 'react-router-dom';
import Loading from '../mordal/Loading';

export default function Poll() {
    const [answer, setAnswer] = useState('');
    const [food, setFood] = useState('');
    const [buttonEnabled, setButtonEnabled] = useState(true);
    const [loading, setLoading] = useState(false); // 로딩 상태 추가
    const [response, setResponse] = useState(null); // 백엔드 응답 상태 추가
    const navigate = useNavigate();

    const handleClick = async () => {
        setLoading(true); // 버튼 클릭 시 로딩 상태를 활성화합니다.

        try {
            // 여기에 백엔드 요청 코드를 추가합니다.
            // 예시: const result = await fetchBackendData(answer, food);

            // 가상의 백엔드 응답 대신 setTimeout을 사용한 예시
            await new Promise((resolve) => setTimeout(resolve, 200000));

            // 요청이 완료되면 로딩 상태를 해제하고 응답 상태를 업데이트합니다.
            setResponse({ message: '일정이 생성되었습니다!' });
        } catch (error) {
            console.error('백엔드 요청 실패:', error);
            setResponse({ error: '일정 생성에 실패했습니다.' });
        } finally {
            setLoading(false); // 요청 완료 후 로딩 상태를 비활성화합니다.
        }
    };
    const styleAnswer = (answer) => {
        const prefixed = answer.startsWith("#")
          ? answer
          : `#${answer}`;
        const erased = prefixed.length === 1 ? "" : prefixed;
        return erased;
    };

    const handleAnswerChange = (event) => {
        const newAnswer = styleAnswer(event.target.value);        
        setAnswer(newAnswer);
        checkConditions(newAnswer);
    };

    const handleFoodChange = (event) => {
        const newFood = event.target.value;
        setFood(newFood.startsWith('#') ? newFood : `#${newFood}`);
    };

    const checkConditions = (answer) => {
        if (answer.length > 1) {
            setButtonEnabled(false);
        } else {
            setButtonEnabled(true);
        }
    };

    useEffect(() => {
        // response 상태가 업데이트되면 다른 페이지로 이동
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
            {loading && <Loading />}
        </div>
    );
}
