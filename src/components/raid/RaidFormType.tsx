import React, { FormEvent, useRef, useState } from 'react'
import styled, { css } from 'styled-components';
import Button from '../common/Button';
import SelectBox from '../common/SelectBox';
import { useAppDispatch, useAppSelector } from '../../utils/RTKhooks';
import useDB from '../../hooks/useDB';
import { CharacterDetail } from '../../types/fetch-types';
import { formActions } from '../../store/form';
import { UIActions } from '../../store/ui';
import { raidActions } from '../../store/raid';
import { useCalendar } from '../../hooks';

type RaidFormPropType = {
  isCreate: boolean,
  currentId: string
};

const RaidFormType = (props: RaidFormPropType) => {
  const { isCreate, currentId } = props;
  const { addRaid, addCrew, updateRaid } = useDB();
  const getCalendar = useCalendar();
  const dispatch = useAppDispatch();
  const [character, setCharacter] = useState<Partial<CharacterDetail>>({});
  const isModify = useAppSelector(state => state.ui.isModify);
  const refs = {
    raidRef: useRef<HTMLButtonElement>(null),
    levelRef: useRef<HTMLButtonElement>(null),
    timeRef: useRef<HTMLButtonElement>(null),
    characterRef: useRef<HTMLButtonElement>(null),
  };
  const raidDetail = useAppSelector(state => state.form);
  const currentRaidId = useAppSelector(state => state.raid.raidId);
  const [selectedName, setSelectedName] = useState('');

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { raidRef, levelRef, timeRef, characterRef } = refs;
    if (isModify) {
      updateRaid(raidDetail, currentId, currentRaidId);
      dispatch(formActions.setName('레이드'));
      dispatch(formActions.setLevel('난이도'));
      dispatch(formActions.setTime('시간'));
      dispatch(UIActions.setIsModify(false));
      dispatch(raidActions.setCurrentRaidId(''));
    }
    else if (isCreate
          && raidRef.current?.textContent !== '레이드' 
          && levelRef.current?.textContent !== '난이도' 
          && timeRef.current?.textContent !== '시간') {
            await addRaid(raidDetail, currentId);
            await getCalendar();
          }
    else if (characterRef.current?.textContent !== '캐릭터') addCrew(character as CharacterDetail, currentId, currentRaidId);
  };

  const cancelHandler = () => {
    dispatch(formActions.setName('레이드'));
    dispatch(formActions.setLevel('난이도'));
    dispatch(formActions.setTime('시간'));
    dispatch(UIActions.setIsModify(false));
    dispatch(raidActions.setCurrentRaidId(''));
  }

  const getBtnTxt = () => isModify ? '수정' : isCreate ? '생성' : '참가';

  return (
    <Form onSubmit={submitHandler}>
        {isCreate ? <SelectBox text='레이드' buttonRef={refs.raidRef} /> : <SelectBox text='이름' setSelectedName={setSelectedName} />}
        {isCreate ? <SelectBox text='난이도' buttonRef={refs.levelRef} /> : <SelectBox text='캐릭터' selectedName={selectedName} buttonRef={refs.characterRef} setCharacter={setCharacter} />}
        {isCreate && <SelectBox text='시간' buttonRef={refs.timeRef} />}
        <RaidSubmitBtn isModify={isModify}>{getBtnTxt()}</RaidSubmitBtn>
        {isModify && <RaidCancelBtn onClick={cancelHandler} type='button'>취소</RaidCancelBtn>}
    </Form>
  )
};

const Form = styled.form`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  position: relative;
`;

const RaidSubmitBtn = styled(Button)<{ isModify: boolean }>`
  width: 150px;
  height: 50px;
  border-radius: 5px;
  position: absolute;
  bottom: 20px;
  ${({ isModify }) => isModify && css`
    left: 60px;
  `}
  background-color: rgb(63, 87, 224);
  color: white;
  font-size: 20px;

  &:hover {
    cursor: pointer;
    background-color: rgb(63, 81, 181);
  }
`;

const RaidCancelBtn = styled(Button)`
  width: 150px;
  height: 50px;
  border-radius: 5px;
  position: absolute;
  bottom: 20px;
  right: 60px;
  background-color: orange;
  color: white;
  font-size: 20px;

  &:hover {
    cursor: pointer;
    background-color: rgb(63, 81, 181);
  }
`

export default RaidFormType;
