import React, { useEffect, useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../utils/RTKhooks';
import { formActions } from '../../store/form';
import { initialCrewState, raidLevelList, raidLevelList2, raidNameList, raidTimeList } from '../../store/data';
import { SelectBoxType } from '../../types/common';

const SelectBox = (props: SelectBoxType) => {
  const { text, selectedName, setSelectedName, buttonRef, setCharacter } = props;
  const { name } = initialCrewState;
  const members = useAppSelector(state => state.crew);
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

  useEffect(() => {
    setBtnTxt(text);
    if (isModify) {
      if (text === '레이드') setBtnTxt(raidName);
      if (text === '난이도') setBtnTxt(raidLevel);
      if (text === '시간') setBtnTxt(raidTime);
      dispatch(formActions.setCharacterList(raidList));
    }
  }, [text, isModify]);
  
  const listClickHandler = (e: SelectChangeEvent) => {
    const txt = e.target.value as string;
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
    <FormControl sx={{ m: 1, minWidth: 200, marginTop: 5 }}>
      <InputLabel id="demo-simple-select-label">{text}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={btnTxt}
        value={btnTxt}
        ref={buttonRef}
        onChange={listClickHandler}
      >
        {dropdownList.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
      </Select>
    </FormControl>
  )
};

export default SelectBox;
