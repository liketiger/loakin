import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { RxChevronDown } from 'react-icons/rx'
import Button from './Button';
import { useAppDispatch, useAppSelector } from '../../utils/RTKhooks';
import { formActions } from '../../store/form';
import { raidLevelList, raidLevelList2, raidNameList, raidTimeList } from '../../store/data';

type SelectBoxType = {
  text: string,
};

type OptionListType = {
  isDropped: boolean,
};

const SelectBox = (props: SelectBoxType) => {
  const { text } = props;
  const [isDropped, setIsDropped] = useState(false);
  const [btnTxt, setBtnTxt] = useState(text);
  // const [dropdownList, setDropdownList] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const raidName = useAppSelector(state => state.form.name);
  let dropdownList: string[] = [];
  if (text === '레이드') dropdownList = raidNameList;
  if (text === '난이도') {
    dropdownList = raidLevelList;
    if (raidName === '아브') dropdownList = raidLevelList2;
    if (raidName === '쿠크') dropdownList = dropdownList.slice(0, 1);
  }
  if (text === '시간') dropdownList = raidTimeList;

  const closeDropdownHandler = (e: MouseEvent) => {
    if (!((e.target as HTMLElement).matches('.selectBtn'))) setIsDropped(false);
  };

  useEffect(() => {
    document.addEventListener('click', closeDropdownHandler);
    setBtnTxt(text);
    // if (text === '레이드') setDropdownList(raidNameList);
    // if (text === '난이도') {
    //   setDropdownList(raidLevelList);
    //   if (raidName === '아브') setDropdownList(raidLevelList2);
    // }
    // if (text === '시간') setDropdownList(raidTimeList);
  }, [text]);
  
  const dropHandler = () => setIsDropped(prev => !prev);

  const listClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const txt = (e.target as HTMLButtonElement).textContent!;
    setBtnTxt(txt);
    if (text === '레이드') dispatch(formActions.setName(txt));
    if (text === '난이도') dispatch(formActions.setLevel(txt));
    if (text === '시간') dispatch(formActions.setTime(txt));
  };

  return (
    <SelectBoxUI>
      <SelectLabel className='selectBtn' onClick={dropHandler} type="button">{btnTxt}</SelectLabel>
      <OptionList isDropped={isDropped}>
        {dropdownList.map((item, index) => <OptionItem key={index} onClick={listClickHandler}>{item}</OptionItem>)}
        {/* <OptionItem onClick={listClickHandler}>이호</OptionItem>
        <OptionItem>황성재</OptionItem>
        <OptionItem>이름이너무길어서어허</OptionItem>
        <OptionItem>이름이너무길어서어허</OptionItem>
        <OptionItem>이름이너무길어서어허</OptionItem> */}
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

const SelectLabel = styled(Button)<{ className: string }>`
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
