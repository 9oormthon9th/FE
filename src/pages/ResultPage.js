import CourseIntro from './CourseIntro';
import TripRecommend from './TripRecommend';
import MyButton from '../component/MyButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { primaryColor } from '../theme/color';
import styled from 'styled-components';

const ResultPage = () => {
    const location = useLocation();
    const response = { ...location.state };
    
    const courseName = response.courseName;
    const centerPos = response.centerPos;
    const startPos = response.startPos;
    const endPos = response.endPos;
    const description = response.description;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/poll');
    };

    return (
        <ResultContainer>
            <CourseIntro
                courseName={courseName}
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
        </ResultContainer>
    );
};

export default ResultPage;

const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem;

    flex: 1;
    overflow-y: auto;
    scroll-behavior: smooth;
    height: 45rem;

    &::-webkit-scrollbar {
        width: 5px;
    }

    /* &::-webkit-scrollbar-thumb {
        background-color: gray;
        border-radius: 1rem;
    } */

    &::-webkit-scrollbar-track {
        background-color: white;
    }

    /* &::-webkit-scrollbar-thumb {
        background-color: red;
        border-radius: 1rem;
    } */
`;

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
