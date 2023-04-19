import React, { FormEvent } from 'react'
import styled from 'styled-components';
import Button from '../common/Button';
import SelectBox from '../common/SelectBox';

type RaidFormPropType = {
  isCreate: boolean
};

const RaidFormType = (props: RaidFormPropType) => {
  const { isCreate } = props;

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

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
  align-items: center;
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
