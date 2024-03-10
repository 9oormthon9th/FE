import CourseIntro from '../component/CourseIntro';
import TripRecommend from '../component/TripRecommend';
import MyButton from '../component/MyButton';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ResultPage = () => {
  const location = useLocation();
  const response = { ...location.state };

  const image1 = response.image1;
  const image2 = response.image2;
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
        image1={image1}
        image2={image2}
        courseName={courseName}
        startPos={startPos}
        endPos={endPos}
        centerPos={centerPos}
        description={description}
      />

      <hr className='my-8 h-[2px] bg-[#cdced6]' />

      <TripRecommend
        startPos={startPos}
        endPos={endPos}
        centerPos={centerPos}
      />

      <hr className='my-3 border-none' />

      <MyButton text='다시 추천받기' onClick={handleClick} />
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
  /* max-height: 45rem; */
  height: 100%;

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
