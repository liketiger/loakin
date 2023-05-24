import React from 'react'
import styled, { css } from 'styled-components';
import { CharacterDetail } from '../../types/fetch-types';
import { modalActions } from '../../store/modal';
import { useAppDispatch, useAppSelector } from '../../utils/RTKhooks';
import CharacterText from '../common/CharacterText';
import CrewCharacterWrapper from '../common/CrewCharacterWrapper';
import Button from '../common/Button';
import useDB from '../../hooks/useDB';

type RaidCrewInfoPropsType = {
  character: CharacterDetail
};

const RaidCrewInfo = (props: RaidCrewInfoPropsType) => {
  const { CharacterLevel, CharacterName, ItemAvgLevel, CharacterClassName, ServerName, _id } = props.character;
  const dispatch = useAppDispatch();
  const { deleteCrew } = useDB();
  const scheduleId = useAppSelector(state => state.raid.scheduleId);
  const raidId = useAppSelector(state => state.raid.raidId);

  const OpenModalHandler = () => dispatch(modalActions.toggleModal());

  const deleteHandler = () => deleteCrew(scheduleId, raidId, _id!);

  return <NewCrewCharacterWrapper>
    <NewCharacterText type='level' onClick={OpenModalHandler}>{CharacterLevel}</NewCharacterText>
    <NewCharacterText type='name'>{CharacterName}</NewCharacterText>
    <NewCharacterText type='item'>{ItemAvgLevel}</NewCharacterText>
    <NewCharacterText type='class'>{CharacterClassName}</NewCharacterText>
    <NewCharacterText type='server'>{ServerName}</NewCharacterText>
    <CrewCharacterDeleteBtn onClick={deleteHandler}>삭제</CrewCharacterDeleteBtn>
  </NewCrewCharacterWrapper>
};

const NewCrewCharacterWrapper = styled(CrewCharacterWrapper)`
  grid-template-columns: 1fr 200px 1fr 150px 160px;
  grid-template-rows: repeat(auto-fill, 55px);
`;

const NewCharacterText = styled(CharacterText)`
  ${({ type }) => type === 'level'
  ? css`
    &::after {
      content: '';
      display: block;
      width: 90%;
      height: 55px;
      position: absolute;
      top: 10px;
      left: 0;
    }
  `: ''};
  ${({ type }) => type === 'server' && css`
    padding-left: 0;
  `};
`;

const CrewCharacterDeleteBtn = styled(Button)`
  position: absolute;
  right: 10px;
  border-radius: 5px;
  width: 50px;
  height: 30px;
  background-color: red;
  color: white;
  font-size: 16px;
  line-height: 30px;

  &:hover {
    cursor: pointer;
    background-color: grey;
  }
`

export default RaidCrewInfo;
