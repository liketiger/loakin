import React from 'react'
import styled from "styled-components";

type ButtonProps = {
  children: string,
  onClick?: () => void,
  type?: 'submit' | 'reset' | 'button' | undefined;
};

const Button = (props: ButtonProps) => {
  return (
    <ButtonUI {...props}>{props.children}</ButtonUI>
  )
};

const ButtonUI = styled.button`
  outline: none;
  border: none;
`;

export default Button;