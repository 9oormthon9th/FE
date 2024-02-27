import './App.css';
import styled from 'styled-components';
import Poll from './pages/Poll';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <RootContainer>
            <InnerContainer>
                <Routes>
                    <Route path='/poll' element={<Poll />} />
                </Routes>
            </InnerContainer>
        </RootContainer>
    );
}

export default App;

const RootContainer = styled.div`
    display: flex;
    height: 100vh;
    background-color: white;
    // background-color: #e9e9e9;
    justify-content: center;
    margin: 0 auto;
    flex: 1;
`;

const InnerContainer = styled.div`
    width: 25%;
    min-width: 350px;
    background-color: white;
`;
