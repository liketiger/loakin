import React from 'react'
import { CharacterDetail } from '../../types/fetch-types';
import { useAppDispatch } from '../../utils/RTKhooks';
import { modalActions } from '../../store/modal';
import CharacterText from '../common/CharacterText';

type CrewCharacterDetailProps = {
  info: CharacterDetail,
  index: number
};

const CrewCharacterDetail = (props: CrewCharacterDetailProps) => {
  const { ServerName, CharacterName, CharacterLevel, CharacterClassName, ItemAvgLevel } = props.info;
  const dispatch = useAppDispatch();

  const OpenModalHandler = () => dispatch(modalActions.toggleModal());

  return <>
    <CharacterText type='level' index={props.index} onClick={OpenModalHandler}>{CharacterLevel}</CharacterText>
    <CharacterText type='name'>{CharacterName}</CharacterText>
    <CharacterText type='item'>{ItemAvgLevel}</CharacterText>
    <CharacterText type='class'>{CharacterClassName}</CharacterText>
    <CharacterText type='server'>{ServerName}</CharacterText>
  </>
};

export default CrewCharacterDetail;