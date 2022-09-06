import './App.css';
import Main from './containers/main/home';
import Practice from './containers/practice/home';
import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <>
      <GlobalStyle />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/practice' element={<Practice />} />
        </Routes>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
  }
`;