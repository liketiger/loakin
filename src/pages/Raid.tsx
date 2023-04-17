import React from 'react'
import styled from 'styled-components';
import RaidDetail from '../components/raid/RaidDetail';
import RaidForm from '../components/raid/RaidForm';
import RaidCrew from '../components/raid/RaidCrew';

const Raid = () => {
  return (
    <RaidWrapper>
      <RaidDetail />
      <RaidForm />
      <RaidCrew />
    </RaidWrapper>
  )
};

const RaidWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export default Raid;
