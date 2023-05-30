import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../common/Button';
import RaidFormType from './RaidFormType';
import { useAppDispatch, useAppSelector } from '../../utils/RTKhooks';
import { mockSchedule } from '../../store/data';
import RaidScheduleForm from './RaidScheduleForm';
import { UIActions } from '../../store/ui';

type SelectBtnType = {
  isCreate: boolean;
  btnType: string;
  isRaid?: boolean;
};

const RaidForm = () => {
  const isCreate = useAppSelector(state => state.ui.isCreate);
  const dispatch = useAppDispatch();
  const selectCreateHandler = () => {
    dispatch(UIActions.setIsCreate(true));
    dispatch(UIActions.setIsRaidListSelected(false));
  }
  const selectAttendHandler = () => dispatch(UIActions.setIsCreate(false));
  let schedule = useAppSelector(state => state.calendar.schedules);
  console.log(schedule);
  let raidDate = useAppSelector(state => state.raid.date);
  if (schedule.length !== 0) localStorage.setItem('schedule', JSON.stringify(schedule));

  schedule = schedule.length === 0 ? JSON.parse((localStorage.getItem('schedule') as string)) : schedule;
  raidDate = raidDate || localStorage.getItem('raid-date') as string;

  const currentId = schedule.find(item => item.date === raidDate)?._id as string;

  const newSchedule = { ...mockSchedule, date: raidDate };

  const themeHandler = ({ isCreate, btnType }: SelectBtnType) => {
    if (isCreate) {
      if (btnType === 'create') return 'white';
      return '#C0C0C0';
    }
    if (btnType === 'create') return '#C0C0C0';
    return 'white';
  };

  const currentSchedule = schedule.find(item => item.date === raidDate);
  const isRaidList = useAppSelector(state => state.ui.isRaidListSelected);

  return (
    <RaidFormWrapper>
      {!currentSchedule && <RaidScheduleForm newSchedule={newSchedule} />}
      <BtnWrapper>
        <RaidFormSelectBtn theme={themeHandler} onClick={selectCreateHandler} isRaid={isRaidList} isCreate={isCreate} btnType="create">
          레이드 생성
        </RaidFormSelectBtn>
        {isRaidList
        && <RaidFormSelectBtn theme={themeHandler} onClick={selectAttendHandler} isRaid={isRaidList} isCreate={isCreate} btnType="attend">
          레이드 참가
        </RaidFormSelectBtn>}
      </BtnWrapper>
      <RaidFormType currentId={currentId} isCreate={isCreate} />
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
  width: ${({ isRaid }) => isRaid ? '50%' : '100%'};
  height: 50px;
  background-color: ${(props) => props.theme(props)};
  ${({ isRaid }) => isRaid && css`
    &:hover {
      cursor: pointer;
    }
  `};
`;

export default RaidForm;
