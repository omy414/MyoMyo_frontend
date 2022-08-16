import logo from './assets/images/logo.svg';
import './App.css';
import Main from './containers/main/home';
import Practice from './containers/practice/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/practice' element={<Practice />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
  }
`;