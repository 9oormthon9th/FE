import CourseIntro from './CourseIntro';
import TripRecommend from './TripRecommend';
import MyButton from '../component/MyButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { primaryColor } from '../theme/color';
import styled from 'styled-components';

const ResultPage = () => {
    const location = useLocation();
    const response = { ...location.state };

    const centerPos = response.centerPos;
    const startPos = response.startPos;
    const endPos = response.endPos;
    const description = response.description;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/poll');
    };

    return (
        <div className='p-12'>
            <CourseIntro
                startPos={startPos}
                endPos={endPos}
                centerPos={centerPos}
                description={description}
            />

            <hr className='my-8 border-none h-[1px] bg-[#cdced6]' />

            <TripRecommend
                startPos={startPos}
                endPos={endPos}
                centerPos={centerPos}
            />

            <hr className='my-3 border-none' />

            <SubmitButton text='다시 추천받기' onClick={handleClick} variant />
        </div>
    );
};

export default ResultPage;

const SubmitButton = styled(MyButton)`
    &:hover {
        background-color: ${primaryColor};
        opacity: 0.5;
        color: white;
        cursor: pointer;
    }
    &:active {
        background-color: ${primaryColor};
        color: white;
    }
    transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out,
        opacity 0.15s ease-in-out;
`;
