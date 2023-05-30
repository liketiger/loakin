import React, { RefObject } from 'react'
import styled from "styled-components";
import { ButtonProps } from '../../types/common';

const Button = ({buttonRef, children, ...props}: ButtonProps) => {
  return (
    <ButtonUI {...props} ref={buttonRef}>{children}</ButtonUI>
  )
};

const ButtonUI = styled.button`
  outline: none;
  border: none;
`;

export default Button;