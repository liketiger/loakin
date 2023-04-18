import React from 'react'
import styled, { css } from 'styled-components';
import { CharacterDetail } from '../../types/fetch-types';

type CrewCharacterDetailProps = {
  info: CharacterDetail,
  index: number
};

type TextPropType = {
  type: string,
  index?: number,
};

const CrewCharacterDetail = (props: CrewCharacterDetailProps) => {
  const { ServerName, CharacterName, CharacterLevel, CharacterClassName, ItemAvgLevel } = props.info;
  return <>
    <CharacterText type='level' index={props.index} onClick={() => console.log('hi')}>{CharacterLevel}</CharacterText>
    <CharacterText type='name'>{CharacterName}</CharacterText>
    <CharacterText type='item'>{ItemAvgLevel}</CharacterText>
    <CharacterText type='class'>{CharacterClassName}</CharacterText>
    <CharacterText type='server'>{ServerName}</CharacterText>
  </>
};

const CharacterText = styled.span<TextPropType>`
  font-weight: ${({ type }) => type === 'name' || type === 'class' ? 'bold' : 400};
  font-size: 18px;
  justify-self: ${({ type }) => type === 'level'
  ? 'center'
  : 'start'
  };
  color: ${({ type }) => type === 'class' 
  ? 'brown'
  : type === 'name' || type === 'item'
  ? 'black'
  : 'grey'
  };

  ${({ type, index }) => type === 'level'
  ? css`
    &::after {
      content: '';
      display: block;
      width: 500px;
      height: 35px;
      /* background-color: red; */
      position: absolute;
      top: ${`${(index! * 35) + 13}px`};
      left: 0;
    }
  `: ''};

  &:hover::after {
    background-color: grey;
    opacity: 0.5;
    cursor: pointer;
  };

  ${({ type }) => type === 'name' || type === 'server'
  ? css`
    padding-left: 5px;
  `
  : ''};
`;

export default CrewCharacterDetail;