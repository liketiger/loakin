import React from 'react'
import styled from 'styled-components';
import { CrewCharacterWrapperPropsType } from '../../types/common';

const CrewCharacterWrapper = (props: CrewCharacterWrapperPropsType) => {
  return (
    <CrewCharacterWrapperUI {...props}>{props.children}</CrewCharacterWrapperUI>
  )
};

const CrewCharacterWrapperUI = styled.div`
  border-radius: 0 0 10px 10px;
  padding: 10px;
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: repeat(auto-fill, 35px);
  justify-items: start;
  align-items: center;
  align-content: center;
  position: relative;
`;

export default CrewCharacterWrapper;
