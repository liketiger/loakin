import React from 'react';
import styled from 'styled-components';
import CrewCharacterDetail from './CrewCharacterDetail';
import CrewCharacterWrapper from '../common/CrewCharacterWrapper';
import { CrewItemTypes } from '../../types/crew';

const CrewItem = (props: CrewItemTypes) => {
  const { name, characterList } = props;
  return <ItemWrapper>
      <CrewName>{name}</CrewName>
      <CrewCharacterWrapper>
        {characterList?.map((character, index) => <CrewCharacterDetail key={index} index={index} info={character} />)}
      </CrewCharacterWrapper>
  </ItemWrapper>
};

const ItemWrapper = styled.article`
  width: 500px;
  height: 500px;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const CrewName = styled.div`
  border-radius: 10px 10px 0 0;
  flex-basis: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid grey;
  background: linear-gradient(90deg, #fcff9e 0%, #c67700 100%);
  font-weight: bold;
  color: #484848;
`;

export default CrewItem;
