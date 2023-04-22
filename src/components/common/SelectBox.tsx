import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { RxChevronDown } from 'react-icons/rx'
import Button from './Button';

type SelectBoxType = {
  text: string,
}

type OptionListType = {
  isDropped: boolean,
};

const SelectBox = (props: SelectBoxType) => {
  const [isDropped, setIsDropped] = useState(false);
  const [btnTxt, setBtnTxt] = useState(props.text);

  const closeDropdownHandler = (e: MouseEvent) => {
    if (!((e.target as HTMLElement).matches('#selectBtn'))) setIsDropped(false);
  }

  useEffect(() => {
    document.addEventListener('click', closeDropdownHandler);
    setBtnTxt(props.text);
  }, [props.text]);
  
  const dropHandler = () => setIsDropped(prev => !prev);

  const listClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    setBtnTxt((e.target as HTMLButtonElement).textContent!);
  }

  return (
    <SelectBoxUI>
      <SelectLabel id='selectBtn' onClick={dropHandler}>{btnTxt}</SelectLabel>
      <OptionList isDropped={isDropped}>
        <OptionItem onClick={listClickHandler}>이호</OptionItem>
        <OptionItem>황성재</OptionItem>
        <OptionItem>이름이너무길어서어허</OptionItem>
        <OptionItem>이름이너무길어서어허</OptionItem>
        <OptionItem>이름이너무길어서어허</OptionItem>
      </OptionList>
      <ArrowIcon />
    </SelectBoxUI>
  )
};

const SelectBoxUI = styled.div`
  /* width: 200px; */
  height: 40px;
  border: 1px solid black;
  border-radius: 5px;
  position: relative;
`;

const ArrowIcon = styled(RxChevronDown)`
  position: absolute;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  right: 0;
`;

const SelectLabel = styled(Button)<{ id: string }>`
  width: 100%;
  height: 100%;
  background-color: transparent;
  padding-right: 30px;

  &:hover {
    background-color: #A0A0A0;
    cursor: pointer;
  }

  &::after {
    content: '';
    display: block; 
    width: 2px;
    height: 100%; 
    position: absolute; 
    top: 0; 
    right: 15px;
    background: #A0A0A0;
  }
`;

const OptionList = styled.ul<OptionListType>`
  position: absolute;
  top: 39px;
  right: 0;
  list-style-type: none;
  border: 1px solid black;
  border-radius: 5px;
  margin: 0;
  z-index: 1;
  background-color: white;
  display: ${({ isDropped }) => isDropped ? 'block' : 'none'};
`;

const OptionItem = styled.li`
  text-align: right;
  padding: 5px 10px;
  margin: 5px 0;
  white-space: nowrap;

  &:hover {
    background-color: #A0A0A0;
    cursor: pointer;
  }
`;

export default SelectBox;
