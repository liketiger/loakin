import React, { useState, FormEvent } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import Input from '../common/Input';
import SelectBox from '../common/SelectBox';
import RaidFormType from './RaidFormType';
import { useAppDispatch, useAppSelector } from '../../utils/RTKhooks';
import { mockSchedule } from '../../store/data';
import { calendarActions } from '../../store/calendar';
import CRUDActions from '../../hooks/useDB';
import useDB from '../../hooks/useDB';
import RaidScheduleForm from './RaidScheduleForm';

type SelectBtnType = {
  isCreate: boolean;
  btnType: string;
};

const RaidForm = () => {
  const [isCreate, setIsCreate] = useState(true);
  const selectCreateHandler = () => setIsCreate(true);
  const selectAttendHandler = () => setIsCreate(false);
  const schedule = useAppSelector(state => state.calendar.schedules);
  const raidDate = useAppSelector(state => state.raid.date);
  const newSchedule = { ...mockSchedule, date: raidDate };

  const themeHandler = ({ isCreate, btnType }: SelectBtnType) => {
    if (isCreate) {
      if (btnType === 'create') return 'white';
      return '#C0C0C0';
    }
    if (btnType === 'create') return '#C0C0C0';
    return 'white';
  };

  return (
    <RaidFormWrapper>
      {!schedule.find(item => item.date === raidDate) && <RaidScheduleForm newSchedule={newSchedule} />}
      <BtnWrapper>
        <RaidFormSelectBtn theme={themeHandler} onClick={selectCreateHandler} isCreate={isCreate} btnType="create">
          레이드 생성
        </RaidFormSelectBtn>
        <RaidFormSelectBtn theme={themeHandler} onClick={selectAttendHandler} isCreate={isCreate} btnType="attend">
          레이드 참가
        </RaidFormSelectBtn>
      </BtnWrapper>
      <RaidFormType isCreate={isCreate} />
    </RaidFormWrapper>
  );
};

const RaidFormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: -3px 3px 3px 1px grey;
  position: relative;
`;

const BtnWrapper = styled.div``;

const RaidFormSelectBtn = styled(Button)<SelectBtnType>`
  width: 50%;
  height: 50px;
  background-color: ${(props) => props.theme(props)};
`;

export default RaidForm;
