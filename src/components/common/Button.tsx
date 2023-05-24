import React, { RefObject } from 'react'
import styled from "styled-components";

type ButtonProps = {
  children: string,
  onClick?: () => void,
  type?: 'submit' | 'reset' | 'button' | undefined;
  buttonRef?: RefObject<HTMLButtonElement>
};

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