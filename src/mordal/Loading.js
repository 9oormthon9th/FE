import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Title from '../component/Title';
import { primaryColor } from '../theme/color';

const Loading = () => {
    const [secondFlag, setSecondFlag] = useState(false);
    const [thirdFlag, setThirdFlag] = useState(false);

    useEffect(() => {
        // 5초 후에 secondFlag를 true로 설정
        const timer1 = setTimeout(() => {
            setSecondFlag(true);
        }, 3500);

        // 10초 후에 thirdFlag를 true로 설정
        const timer2 = setTimeout(() => {
            setThirdFlag(true);
        }, 8500);

        // 컴포넌트 언마운트 또는 리렌더링 전에 타이머 정리
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            setSecondFlag(false);
            setThirdFlag(false);
        };
    }, []);

    const renderDots = (number, initialOpacity) => {
        return Array.from({ length: number }).map((_, i) => (
            <Dot
                key={i}
                finalOpacity={initialOpacity + i * 0.05} // Dot별로 최종 투명도를 계산하여 전달합니다.
                style={{
                    animationDelay: `${i * 0.5}s`, // 각 Dot의 애니메이션 지연 시간 설정
                }}
            />
        ));
    };

    return (
        <div className='flex bg-black justify-center'>
            <ModalContainer>
                <Title text={'걸엉가게'} />
                <TextBox>추천 정보를 불러오고 있어요</TextBox>
                <DotContainer>
                    <DotFirst>
                        <FirstGroup>{renderDots(7, 0.3)}</FirstGroup>
                        <SecondGroup>{renderDots(7, 0.5)}</SecondGroup>
                        <ThirdGroup>{renderDots(7, 0.7)}</ThirdGroup>
                    </DotFirst>
                    {secondFlag && (
                        <DotSecond>
                            <FirstGroup>{renderDots(10, 0.15)}</FirstGroup>
                            <SecondGroup>{renderDots(10, 0.35)}</SecondGroup>
                            <ThirdGroup>{renderDots(10, 0.55)}</ThirdGroup>
                        </DotSecond>
                    )}
                    {thirdFlag && (
                        <DotThird>
                            <FirstGroup>{renderDots(10, 0.15)}</FirstGroup>
                            <SecondGroup>{renderDots(10, 0.35)}</SecondGroup>
                            <ThirdGroup>{renderDots(10, 0.55)}</ThirdGroup>
                        </DotThird>
                    )}
                </DotContainer>
            </ModalContainer>
        </div>
    );
};

const ModalContainer = styled.div`
    position: relative;
    background: white;
    transition: all 400ms ease-in-out 2s;
    padding: 2rem 0 0 2rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 768px;
`;

const TextBox = styled.div`
    color: #555f1a;
    margin-bottom: 0.5rem;
    padding: 0 0 1.2rem 0.5rem;
`;

const FirstGroup = styled.div`
    display: flex;
    margin-bottom: 1.4rem;
`;

const SecondGroup = styled.div`
    display: flex;
    margin-bottom: 0.5rem;
`;

const ThirdGroup = styled.div`
    display: flex;
    margin-bottom: 0.5rem;
`;

const DotContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const DotFirst = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    align-items: flex-start;
`;

const DotSecond = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 2rem 5rem;
`;

const DotThird = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DotColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 0.3rem;
`;

const fadeIn = (finalOpacity) => keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: ${finalOpacity};
  }
`;

const Dot = styled.div`
    width: 15px;
    height: 15px;
    background-color: ${primaryColor};
    border-radius: 50%;
    margin: 0 0.5rem;
    opacity: 0;
    // props를 통해 finalOpacity 값을 받아서 애니메이션에 적용
    ${({ finalOpacity }) =>
        finalOpacity &&
        css`
            animation: ${fadeIn(finalOpacity)} 0.5s ease-in-out forwards;
        `}
`;

export default Loading;
