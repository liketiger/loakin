import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import GlobalStyle from './style/global-style';
import Calendar from './pages/Calendar';
import Crew from './pages/Crew';
import Raid from './pages/Raid';
import { useCrewList } from './utils/customHooks';
import Modal from './components/common/Modal';

const App = () => {
  useCrewList();

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/raid" element={<Raid />} />
        </Routes>
        {modalState && <Modal />}
      </BrowserRouter>
    </>
  );
};

export default App;
