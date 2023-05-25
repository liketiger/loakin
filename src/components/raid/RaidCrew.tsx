import React from 'react'
import styled from 'styled-components';
import RaidCrewInfo from './RaidCrewInfo';
import { useAppSelector } from '../../utils/RTKhooks';
import Empty from '../common/Empty';

const RaidCrew = () => {
  const characterList = useAppSelector(state => state.raid.characterList)!;
  const isRaidList = useAppSelector(state => state.ui.isRaidListSelected);

  return (
    <RaidCrewWrapper>
      {characterList.length === 0 || !characterList || !isRaidList
      ? <EmptyCrew />
      : characterList.map((character, index) => <RaidCrewInfo key={index} character={character} />)}
    </RaidCrewWrapper>
  )
};

const RaidCrewWrapper = styled.section`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-auto-flow: column;
  padding: 10px;
  margin-top: 10px;
  position: relative;
  background-color: bisque;
  border-radius: 5px;
`;

const EmptyCrew = styled(Empty)`
  grid-column: 1 / 3;
  grid-row: 3 / 5;
`

export default RaidCrew;
