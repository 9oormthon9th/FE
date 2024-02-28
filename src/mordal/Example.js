import React, { useState } from "react";
import { styled } from "styled-components";
import { IoClose } from "react-icons/io5";
import Title from "../component/Title";

const Example = ({ url, setExampleModalOpen }) => {
  return (
    <ViewContainer>
      <RootContainer>
        <ModalContainer>
          <ModalTitle>
            <ModalDetail>예시 모달</ModalDetail>
            <IoClose
              size={"2rem"}
              onClick={() => {
                setExampleModalOpen(false);
              }}
            />
          </ModalTitle>
          <InputList>
            <iframe
              id="iFrameExample"
              title="iFrame Example"
              className="w-full h-full"
              src={url}
            ></iframe>
            {/* <Title text={'aa'} />
                        <Title text={'aa'} />
                        <Title text={'aa'} />
                        <Title text={'aa'} />
                        <Title text={'aa'} />
                        <Title text={'aa'} />
                        <Title text={'aa'} />
                        <Title text={'aa'} />
                        <Title text={'aa'} /> */}
          </InputList>
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
  padding: 1vh 1.5rem;
  padding: 1vh 1.5rem;
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

const InputList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  flex: 1;
  overflow-y: auto;
  scroll-behavior: smooth;
  height: 85vh;

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

const ModalDetail = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
`;
