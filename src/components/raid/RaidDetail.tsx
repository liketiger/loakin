import React from 'react'
import styled from 'styled-components';
import RaidInfoList from './RaidInfoList';
import { useAppSelector } from '../../utils/RTKhooks';
import Empty from '../common/Empty';

const RaidDetail = () => {
  let schedule = useAppSelector(state => state.calendar.schedules);
  let raidDate = useAppSelector(state => state.raid.date);
  if (raidDate) {
    localStorage.setItem('schedule', JSON.stringify(schedule));
    localStorage.setItem('raid-date', raidDate);
  }
  const refineDate = (date: string) => {
    const newDate = date.split('-').slice(1);
    newDate[0] = `${+newDate[0]}월`;
    newDate[1] = `${+newDate[1]}일`;

    return newDate.join(' ');
  }
  raidDate = raidDate || localStorage.getItem('raid-date') as string;
  schedule = schedule.length === 0 ? JSON.parse((localStorage.getItem('schedule') as string)) : schedule;
  const refinedRaid = schedule.find(item => item.date === raidDate)?.raid;
  const scheduleId = schedule.find(item => item.date === raidDate)?._id;

  return (
    <RaidDetailWrapper>
      <RaidDate>{refineDate(raidDate)}</RaidDate>
      {refinedRaid && refinedRaid.length !== 0 ? <RaidInfoList raid={refinedRaid} scheduleId={scheduleId} /> : <Empty />}
    </RaidDetailWrapper>
  )
};

const RaidDetailWrapper = styled.section`
  border: 1px solid black;
  height: 50vh;
`;

const RaidDate = styled.div`
  text-align: center;
  padding: 10px;
  font-size: 30px;
  margin: 10px 0 15px 0;
`;

export default RaidDetail;