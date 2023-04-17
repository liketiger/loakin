import React from 'react'
import styled from 'styled-components';
import { CharacterDetail } from '../../types/fetch-types';

type CrewCharacterDetailProps = {
  info: CharacterDetail;
}

const CrewCharacterDetail = (props: CrewCharacterDetailProps) => {
  const { ServerName, CharacterName, CharacterLevel, CharacterClassName, ItemAvgLevel } = props.info;
  return <CaracterTextWrapper>
    <CharacterText>{CharacterLevel}</CharacterText>
    <CharacterText type='name'>{CharacterName}</CharacterText>
    <CharacterText>{Math.trunc(+ItemAvgLevel.replace(',', ''))}</CharacterText>
    <CharacterText type='class'>{CharacterClassName}</CharacterText>
    <CharacterText>{ServerName}</CharacterText>
  </CaracterTextWrapper>
};

const CaracterTextWrapper = styled.div`
  width: 100%;
  height: 20px;
`

const CharacterText = styled.span<{ type?: string }>`
  font-weight: ${({ type }) => type === 'name' || type === 'class' ? 'bold' : 400};
  font-size: 18px;
  color: ${({ type }) => type === 'class' 
  ? 'brown'
  : type === 'name'
  ? 'grey'
  : 'black'};
`;

export default CrewCharacterDetail;