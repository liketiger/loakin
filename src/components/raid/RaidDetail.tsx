import React from 'react'
import styled from 'styled-components';
import RaidInfo from './RaidInfo';

const RaidDetail = () => {
  return (
    <RaidDetailWrapper>
      <RaidDate>04/12/월</RaidDate>
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