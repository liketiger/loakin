import React, { FormEvent, useState } from 'react'
import styled from 'styled-components';
import Button from '../common/Button';
import SelectBox from '../common/SelectBox';
import { useAppDispatch, useAppSelector } from '../../utils/RTKhooks';
import { calendarActions } from '../../store/calendar';
import useDB from '../../hooks/useDB';

type RaidFormPropType = {
  isCreate: boolean,
  currentId: string
};

const RaidFormType = (props: RaidFormPropType) => {
  const { isCreate, currentId } = props;
  const { addRaid } = useDB();
  const raidDetail = useAppSelector(state => state.form);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isCreate) addRaid(raidDetail, currentId);
  };

  return (
    <Form onSubmit={submitHandler}>
        {isCreate ? <SelectBox text='레이드' /> : <SelectBox text='이름' />}
        {isCreate ? <SelectBox text='난이도' /> : <SelectBox text='캐릭터' />}
        {isCreate && <SelectBox text='시간' />}
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
