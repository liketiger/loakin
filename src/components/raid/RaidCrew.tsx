import React from 'react'
import styled from 'styled-components';

const RaidCrew = () => {
  return (
    <RaidCrewWrapper>RaidCrew</RaidCrewWrapper>
  )
};

const RaidCrewWrapper = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
`;

export default RaidCrew;
