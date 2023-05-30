import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './style/global-style';
import Calendar from './pages/Calendar';
import Crew from './pages/Crew';
import Raid from './pages/Raid';
import Modal from './components/common/Modal';
import { useAppSelector } from './utils/RTKhooks';
import useCrew from './hooks/useCrew';
import useCalendar from './hooks/useCalendar';
import Header from './components/common/Header';

const App = () => {
  const modalState = useAppSelector((state) => state.modal.isOpen);
  const getCrew = useCrew();
  const getCalendar = useCalendar();

  useEffect(() => {
    getCrew();
    getCalendar();
  }, []);
  
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
