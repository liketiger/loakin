import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import GlobalStyle from './style/global-style';
import Calendar from './pages/Calendar';
import Crew from './pages/Crew';
import Raid from './pages/Raid';

const App = () => {
  return <>
    <GlobalStyle />
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/raid" element={<Raid />} />
      </Routes>
    </BrowserRouter>
  </>
};

export default App;
