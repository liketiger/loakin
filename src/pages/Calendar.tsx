import React from 'react'
import styled from 'styled-components';
import DatePicker from '../components/calendar/DatePicker';

const Calendar = () => {
  return (
    <DatePickerWrapper>
     <DatePicker />
    </DatePickerWrapper>
  )
};

const DatePickerWrapper = styled.section`
  padding: 10px;
  max-width: 1024px;
  margin: 0 auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Calendar;
