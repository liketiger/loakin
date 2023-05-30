import React from 'react'
import styled from 'styled-components';
import { InputType } from '../../types/common';

const Input = (props: InputType) => {
  return (
    <InputUI {...props} type='select' />
  )
};

const InputUI = styled.input`
  
`

export default Input;
