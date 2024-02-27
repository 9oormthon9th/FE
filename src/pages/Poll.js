import React from 'react';
import InputLine from '../component/InputLine';
import styled from 'styled-components';

export default function Poll() {
    return (
        <PollContainer>
            <TitleBox>걸엉가게</TitleBox>
            <TextBox>가고싶은 올레길을 알려주세요</TextBox>
            <InputLine placeholder={'#바다가보이는'} />
            <TextBox>먹고싶은 음식을 알려주세요</TextBox>
            <InputLine placeholder={'#돼지고기'} />
        </PollContainer>
    );
}

const PollContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
`;

const TitleBox = styled.div`
    display: flex;
    color: #555f1a;
    font-size: x-large;
    margin-bottom: 10rem;
    margin-top: 2rem;
`;

const TextBox = styled.div`
    margin: 1rem 0;
`;
