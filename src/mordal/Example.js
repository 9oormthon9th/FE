import { styled } from 'styled-components';
import { IoClose } from 'react-icons/io5';

const Example = ({ url, name, setExampleModalOpen }) => {
  return (
    <ViewContainer>
      <RootContainer>
        <CenteredContainer>
          <RealModal>
            <TitleBar>
              <Title>{name}</Title>
              <IoClose
                size={'2rem'}
                onClick={() => {
                  setExampleModalOpen(false);
                }}
                style={{ cursor: 'pointer' }}
              />
            </TitleBar>
            <Contents>
              <iframe
                id='iFrameExample'
                title='iFrame Example'
                className='w-full h-full'
                src={url}
              ></iframe>
            </Contents>
          </RealModal>
        </CenteredContainer>
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

  /* Way to center the child */
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const CenteredContainer = styled.div`
  position: relative;
  transition: all 400ms ease-in-out 2s;

  /* Apply max-width & padding around mordal */
  height: 100%;
  width: 100%;
  max-width: 768px;
  padding: 1rem 1.5rem 1rem 1.5rem;
`;

const RealModal = styled.div`
  background: white;
  border-radius: 12px;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  align-items: center;
  color: black;
  margin-bottom: 1rem;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  flex: 1;
  overflow-y: auto;
  scroll-behavior: smooth;

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
