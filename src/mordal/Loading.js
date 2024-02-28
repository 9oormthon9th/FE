import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Title from '../component/Title';
import { primaryColor } from '../theme/color';

const Loading = () => {
    const [dots, setDots] = useState([]);

    const renderDots = (number, opacity) => {
        const numbers = [];
        for (let i = 0; i < number; i++) {
            numbers.push(
                <Dot
                    key={i}
                    style={{
                        opacity: (opacity + i * 5) * 0.01,
                    }}
                />
            );
        }
        return numbers;
    };

    return (
        <ViewContainer>
            <RootContainer>
                <ModalContainer>
                    <Title text={'걸엉가게'} />
                    <TextBox>추천 정보를 불러오고 있어요</TextBox>
                    <div
                        style={{
                            marginBottom: '2rem',
                        }}
                    >
                        <DotContainer>{renderDots(7, 30)}</DotContainer>
                        <div
                            style={{ margin: '0.5rem', marginBottom: '1.5rem' }}
                        ></div>
                        <DotContainer>{renderDots(7, 50)}</DotContainer>
                        <DotContainer>{renderDots(7, 70)}</DotContainer>
                    </div>
                    <div style={{ marginLeft: '4rem', marginBottom: '2rem' }}>
                        <DotContainer>{renderDots(10, 15)}</DotContainer>
                        <div
                            style={{ margin: '0.5rem', marginBottom: '1.5rem' }}
                        ></div>
                        <DotContainer>{renderDots(10, 35)}</DotContainer>
                        <DotContainer>{renderDots(10, 55)}</DotContainer>
                    </div>
                    <div style={{ marginLeft: '10rem' }}>
                        <DotContainer>{renderDots(7, 30)}</DotContainer>
                        <div
                            style={{ margin: '0.5rem', marginBottom: '1.5rem' }}
                        ></div>
                        <DotContainer>{renderDots(7, 50)}</DotContainer>
                        <DotContainer>{renderDots(7, 70)}</DotContainer>
                    </div>
                </ModalContainer>
            </RootContainer>
        </ViewContainer>
    );
};

const ViewContainer = styled.div`
    z-index: 1;
    position: absolute;
`;

const RootContainer = styled.div`
    position: fixed;
    inset: 0;
    -webkit-tap-highlight-color: transparent;
`;

const ModalContainer = styled.div`
    position: relative;
    background: white;
    transition: all 400ms ease-in-out 2s;
    padding: 2rem 0 2rem 2rem;
    display: flex;
    flex-direction: column;
`;

const TextBox = styled.div`
    color: #555f1a;
    margin-bottom: 0.5rem;
`;

const DotContainer = styled.div`
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: flex-start;
`;

const Dot = styled.div`
    width: 15px;
    height: 15px;
    background-color: ${primaryColor};
    border-radius: 50%;
    margin: 0.3rem;
`;

export default Loading;
