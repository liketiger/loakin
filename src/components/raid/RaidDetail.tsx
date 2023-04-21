import React from 'react'
import styled from 'styled-components';
import RaidInfo from './RaidInfo';
import { useAppDispatch, useAppSelector } from '../../utils/RTKhooks';

const RaidDetail = () => {
  const schedule = useAppSelector(state => state.calendar.schedules);
  const raidDate = useAppSelector(state => state.raid.date);
  const refinedDate = raidDate.split('-').slice(1).join('-');
  return (
    <RaidDetailWrapper>
      <RaidDate>{refinedDate}</RaidDate>
      <RaidInfo />
    </RaidDetailWrapper>
  )
};

const RaidDetailWrapper = styled.section`
  border: 1px solid black;
  height: 50vh;
`;

const RaidDate = styled.div`
  
`

export default RaidDetail;