import React from 'react'
import styled, { css } from 'styled-components';
import { TextPropType } from '../../types/common';

const CharacterText = (props: TextPropType) => {
  return (
    <CharacterTextUI {...props}>{props.children}</CharacterTextUI>
  )
};

const CharacterTextUI = styled.span<TextPropType>`
  font-weight: ${({ type }) => type === 'name' || type === 'class' ? 'bold' : 400};
  font-size: 18px;
  justify-self: ${({ type }) => type === 'level'
  ? 'center'
  : 'start'
  };
  color: ${({ type }) => type === 'class'
  ? 'brown'
  : type === 'name' || type === 'item'
  ? 'black'
  : 'grey'
  };

  ${({ type, index }) => type === 'level'
  ? css`
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 35px;
      position: absolute;
      top: ${`${(index! * 35) + 13}px`};
      left: 0;
    }
  `: ''};

  &:hover::after {
    background-color: grey;
    opacity: 0.5;
    cursor: pointer;
  };

  ${({ type }) => type === 'name' || type === 'server'
  ? css`
    padding-left: 5px;
  `
  : ''};
`;

export default CharacterText;