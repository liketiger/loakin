import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MemberType } from '../../types/fetch-types';
import CrewCharacterDetail from './CrewCharacterDetail';

type CrewItemTypes = {
  detail: MemberType
};

const CrewItem = (props: CrewItemTypes) => {

  const { detail } = props;
  return <ItemWrapper>
      <CrewName>{detail.name}</CrewName>
      <CrewCharacter>
        {detail.characterList.map((character, index) => <CrewCharacterDetail key={index} info={character} />)}
      </CrewCharacter>
  </ItemWrapper>
};

const ItemWrapper = styled.article`
  width: 300px;
  height: 300px;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const CrewName = styled.div`
  border-radius: 10px 10px 0 0;
  flex-basis: 15%;
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
  flex-grow: 1;
`;

export default CrewItem;
