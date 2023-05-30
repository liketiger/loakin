import React, { Dispatch, RefObject, SetStateAction, useEffect, useState } from 'react'
import styled from 'styled-components';
import { RxChevronDown } from 'react-icons/rx'
import Button from './Button';
import { useAppDispatch, useAppSelector } from '../../utils/RTKhooks';
import { formActions } from '../../store/form';
import { initialCrewState, raidLevelList, raidLevelList2, raidNameList, raidTimeList } from '../../store/data';
import { OptionListType, SelectBoxType } from '../../types/common';

const SelectBox = (props: SelectBoxType) => {
  const { text, selectedName, setSelectedName, buttonRef, setCharacter } = props;
  const { name } = initialCrewState;
  const members = useAppSelector(state => state.crew);
  const [isDropped, setIsDropped] = useState(false);
  const [btnTxt, setBtnTxt] = useState(text);
  const dispatch = useAppDispatch();
  const raidName = useAppSelector(state => state.form.name);
  const raidLevel = useAppSelector(state => state.form.level);
  const raidTime = useAppSelector(state => state.form.time);
  const isModify = useAppSelector(state => state.ui.isModify);
  const raidList = useAppSelector(state => state.raid.characterList);
  let dropdownList: string[] = [];
  if (text === '레이드') dropdownList = raidNameList;
  if (text === '난이도') {
    dropdownList = raidLevelList;
    if (raidName === '아브') dropdownList = raidLevelList2;
    if (raidName === '쿠크') dropdownList = dropdownList.slice(0, 1);
  }
  if (text === '시간') dropdownList = raidTimeList;
  if (text === '이름') dropdownList = name;
  if (text === '캐릭터' && selectedName) 
    dropdownList = members.characterList[name.indexOf(selectedName!)].map(item => item.CharacterName);

  const closeDropdownHandler = (e: MouseEvent) => {
    if (!((e.target as HTMLElement).matches('.selectBtn'))) setIsDropped(false);
  };

  useEffect(() => {
    document.addEventListener('click', closeDropdownHandler);
    setBtnTxt(text);
    if (isModify) {
      if (text === '레이드') setBtnTxt(raidName);
      if (text === '난이도') setBtnTxt(raidLevel);
      if (text === '시간') setBtnTxt(raidTime);
      dispatch(formActions.setCharacterList(raidList));
    }
  }, [text, isModify]);
  
  const dropHandler = () => setIsDropped(prev => !prev);

  const listClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const txt = (e.target as HTMLButtonElement).textContent!;
    setBtnTxt(txt);
    if (text === '레이드') dispatch(formActions.setName(txt));
    if (text === '난이도') dispatch(formActions.setLevel(txt));
    if (text === '시간') dispatch(formActions.setTime(txt));
    if (text === '이름') setSelectedName!(txt);
    if (text === '캐릭터') {
      const character = members.characterList[name.indexOf(selectedName!)].find(item => item.CharacterName === txt)!;
      setCharacter!(character);
    }
  };

  return (
    <SelectBoxUI>
      <SelectLabel className='selectBtn' onClick={dropHandler} type="button" buttonRef={buttonRef!}>{btnTxt}</SelectLabel>
      <OptionList isDropped={isDropped}>
        {dropdownList.map((item, index) => <OptionItem key={index} onClick={listClickHandler}>{item}</OptionItem>)}
      </OptionList>
      <ArrowIcon />
    </SelectBoxUI>
  )
};

const SelectBoxUI = styled.div`
  height: 40px;
  border: 1px solid black;
  border-radius: 5px;
  position: relative;
  top: 20%;
`;

const ArrowIcon = styled(RxChevronDown)`
  position: absolute;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  right: 0;
`;

const SelectLabel = styled(Button)<{ className: string, buttonRef: RefObject<HTMLButtonElement> }>`
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
