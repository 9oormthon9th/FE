import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Title from '../component/Title';
import { primaryColor } from '../theme/color';

const Loading = () => {
    const [dots, setDots] = useState([]);
    const groupConfig = [
        { lines: 3, count: 7, initialOpacity: 30 },
        { lines: 3, count: 10, initialOpacity: 15 },
        { lines: 3, count: 7, initialOpacity: 15 },
    ];

    useEffect(() => {
        const renderGroupsSequentially = async () => {
            for (const group of groupConfig) {
                for (let line = 0; line < group.lines; line++) {
                    for (let i = 0; i < group.count; i++) {
                        await new Promise((resolve) =>
                            setTimeout(resolve, 500)
                        );
                        setDots((prevDots) => [
                            ...prevDots,
                            {
                                groupId: groupConfig.indexOf(group),
                                lineId: line,
                                id: i,
                                opacity: (group.initialOpacity + i * 5) * 0.01,
                            },
                        ]);
                    }
                }
            }
        };

        renderGroupsSequentially();
    }, []);

    return (
        <ViewContainer>
            <RootContainer>
                <ModalContainer>
                    <Title text={'걸엉가게'} />
                    <TextBox>추천 정보를 불러오고 있어요</TextBox>
                    <DotContainer>
                        {dots.map((dot) => (
                            <DotLine
                                key={`group-${dot.groupId}-line-${dot.lineId}`}
                            >
                                <Dot
                                    key={`${dot.groupId}-${dot.lineId}-${dot.id}`}
                                    style={{
                                        opacity: dot.opacity,
                                        marginLeft:
                                            dot.id === 0 ? '0' : '0.3rem',
                                    }}
                                />
                            </DotLine>
                        ))}
                    </DotContainer>
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

const DotLine = styled.div`
    display: flex;
`;

const DotContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Dot = styled.div`
    width: 15px;
    height: 15px;
    background-color: ${primaryColor};
    border-radius: 50%;
    margin: 0.3rem;
`;

export default Loading;
