import React from 'react'
import styled from 'styled-components';

type InputType = {
  type: string,
};

const Input = (props: InputType) => {
  return (
    <InputUI {...props} type='select' />
  )
};

const InputUI = styled.input`
  
`

export default Input;
