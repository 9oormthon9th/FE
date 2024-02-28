import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Title from '../component/Title';
import { primaryColor } from '../theme/color';

const Loading = () => {
    // Initialize opacity for each group
    const initialOpacities = [30, 50, 70];
    const [opacities, setOpacities] = useState(initialOpacities);

    useEffect(() => {
        // Set interval to increase opacity
        const interval = setInterval(() => {
            setOpacities((prevOpacities) =>
                prevOpacities.map((opacity) =>
                    opacity < 100 ? (opacity + 5) * 0.01 : opacity * 0.01
                )
            );
        }, 1000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <ViewContainer>
            <RootContainer>
                <ModalContainer>
                    <Title text={'걸엉가게'} />
                    <TextBox>추천 정보를 불러오고 있어요</TextBox>
                    <GroupContainer>
                        {Array.from({ length: 7 }, (_, groupIndex) => (
                            <DotColumn
                                key={groupIndex}
                                style={{
                                    // Set opacity for each group based on its state
                                    opacity: opacities[groupIndex],
                                }}
                            >
                                {Array.from({ length: 3 }, (_, dotIndex) => (
                                    <Dot key={dotIndex} />
                                ))}
                            </DotColumn>
                        ))}
                    </GroupContainer>
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

const GroupContainer = styled.div`
    display: flex;
    margin-bottom: 0.5rem;
`;

const DotLine = styled.div`
    display: flex;
`;

const DotColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 0.3rem;
`;

const Dot = styled.div`
    width: 15px;
    height: 15px;
    background-color: ${primaryColor};
    border-radius: 50%;
    margin-bottom: 0.3rem;
`;

export default Loading;
