import React, { FormEvent, useRef, useState } from 'react'
import styled from 'styled-components';
import Button from '../common/Button';
import SelectBox from '../common/SelectBox';
import { useAppDispatch, useAppSelector } from '../../utils/RTKhooks';
import { calendarActions } from '../../store/calendar';
import useDB from '../../hooks/useDB';
import { CharacterDetail } from '../../types/fetch-types';

type RaidFormPropType = {
  isCreate: boolean,
  currentId: string
};

const RaidFormType = (props: RaidFormPropType) => {
  const { isCreate, currentId } = props;
  const { addRaid, addCrew } = useDB();
  const [character, setCharacter] = useState<Partial<CharacterDetail>>({});
  const refs = {
    raidRef: useRef<HTMLButtonElement>(null),
    levelRef: useRef<HTMLButtonElement>(null),
    timeRef: useRef<HTMLButtonElement>(null),
    characterRef: useRef<HTMLButtonElement>(null),
  };
  const raidDetail = useAppSelector(state => state.form);
  const currentRaidId = useAppSelector(state => state.raid.raidId);
  const [selectedName, setSelectedName] = useState('');

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { raidRef, levelRef, timeRef, characterRef } = refs;
    if (isCreate) {
      if (raidRef.current?.textContent !== '레이드' 
        && levelRef.current?.textContent !== '난이도' 
        && timeRef.current?.textContent !== '시간') addRaid(raidDetail, currentId);
    }
    else if (characterRef.current?.textContent !== '캐릭터') addCrew(character as CharacterDetail, currentId, currentRaidId);
  };

  return (
    <Form onSubmit={submitHandler}>
        {isCreate ? <SelectBox text='레이드' buttonRef={refs.raidRef} /> : <SelectBox text='이름' setSelectedName={setSelectedName} />}
        {isCreate ? <SelectBox text='난이도' buttonRef={refs.levelRef} /> : <SelectBox text='캐릭터' selectedName={selectedName} buttonRef={refs.characterRef} setCharacter={setCharacter} />}
        {isCreate && <SelectBox text='시간' buttonRef={refs.timeRef} />}
        <RaidSubmitBtn>{isCreate ? '생성' : '참가'}</RaidSubmitBtn>
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

const RaidSubmitBtn = styled(Button)`
  width: 150px;
  height: 50px;
  border-radius: 5px;
  position: absolute;
  bottom: 20px;
  background-color: rgb(63, 87, 224);;
  color: white;
  font-size: 20px;

  &:hover {
    cursor: pointer;
    background-color: rgb(63, 81, 181);;
  }
`;

export default RaidFormType;
