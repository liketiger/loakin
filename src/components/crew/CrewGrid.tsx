import React from 'react'
import styled from 'styled-components';
import CrewList from './CrewList';

export const CrewGrid = () => {
  return (
    <CrewWrapper>
      <Grid>
        <CrewList />
      </Grid>
    </CrewWrapper>
  )
};

const CrewWrapper = styled.section`
  padding: 20px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  row-gap: 20px;
`
