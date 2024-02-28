import React, { useState } from 'react';
import { styled } from 'styled-components';
import { IoClose } from 'react-icons/io5';

const Example = ({ setExampleModalOpen }) => {

    return (
        <ViewContainer>
            <RootContainer>
                <ModalContainer>
                    <ModalTitle>
                        <ModalDetail>예시 모달</ModalDetail>
                        <IoClose
                            size={'2rem'}
                            onClick={() => {
                                setExampleModalOpen(false);
                            }}
                        />
                    </ModalTitle>
                </ModalContainer>
            </RootContainer>
        </ViewContainer>
    );
};

export default Example;

const ViewContainer = styled.div`
    z-index: 1;
    position: relative;
`;

const RootContainer = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgb(0 0 0 / 30%);
    -webkit-tap-highlight-color: transparent;
    justify-content: center;
    padding: 12vh 1.5rem;
`;

const ModalContainer = styled.div`
    position: relative;
    background: white;
    border-radius: 0.5rem;
    transition: all 400ms ease-in-out 2s;
    padding: 2rem;
`;

const ModalTitle = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    align-items: center;
    color: black;
    margin-bottom: 1rem;
`;

const ModalDetail = styled.p`
    font-weight: 600;
    font-size: 1.5rem;
`;