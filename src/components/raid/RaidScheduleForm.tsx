import React, { FormEvent } from 'react'
import styled from 'styled-components';
import Button from '../common/Button';
import { CalendarDetail } from '../../types/render-type';
import useDB from '../../hooks/useDB';
import { useCalendar } from '../../hooks';

type RaidScheduleFormPropsType = {
  newSchedule: CalendarDetail;
}

const RaidScheduleForm = (props: RaidScheduleFormPropsType) => {
  const { addSchedule } = useDB();
  const { newSchedule } = props;
  const getCalendar = useCalendar();
  const addScheduleHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addSchedule(newSchedule);
    await getCalendar();
  };
  return (
    <RaidForm onSubmit={addScheduleHandler}>
      <RaidScheduleBtn>스케쥴 생성</RaidScheduleBtn>
    </RaidForm>
  )
};

const RaidForm = styled.form`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 10px 10px;
`

const RaidScheduleBtn = styled(Button)`
  width: 200px;
  height: 50px;
  background-color: orange;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  
  &:hover {
    cursor: pointer;
    background-color: #fab404;
    box-shadow: 3px 3px 5px 2px grey;
  }
`;

export default RaidScheduleForm;
