import React from 'react';
import styled from 'styled-components';
import { CharacterDetail } from '../../types/fetch-types';
import CrewCharacterDetail from './CrewCharacterDetail';

type CrewItemTypes = {
  name: string,
  characterList: CharacterDetail[],
};

const CrewItem = (props: CrewItemTypes) => {
  const { name, characterList } = props;
  return <ItemWrapper>
      <CrewName>{name}</CrewName>
      <CrewCharacter>
        {characterList?.map((character, index) => <CrewCharacterDetail key={index} index={index} info={character} />)}
      </CrewCharacter>
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

const CrewCharacter = styled.div`
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

export default CrewItem;
