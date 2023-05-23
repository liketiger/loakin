import { CalendarDetail, InitialCalendarState, InitialCrewState, InitialFormState, InitialModalState, InitialRaidState, InitialUIState } from "../types/render-type";

export const initialCrewState: InitialCrewState = {
  name: ['이호', '황성재', '임찬호', '김민지'],
  main: ['호얏치', '에르가시안', '임찬호임', '찬호지키미'],
  characterList: []
};

export const initialModalState: InitialModalState = {
  isOpen: false
};

export const initialCalendarState: InitialCalendarState = {
  schedules: []
};

export const initialRaidState: InitialRaidState = {
  date: '',
  characterList: []
};

export const initialUIState: InitialUIState = {
  isCreate: true,
  isRaidListSelected: false
};

export const mockSchedule: CalendarDetail = {
  date: '',
  raid: []
};

export const initialFormState: InitialFormState = {
  name: '',
  level: '',
  time: '',
  characterList: []
};

export const raidNameList = ['발탄', '비아', '쿠크', '아브', '일리'];
export const raidLevelList = ['노말', '하드'];
export const raidLevelList2 = ['노말12', '노말34', '노말56', '하드12', '하드34', '하드56'];
const RAID_START_TIME = 9;
const calcHour = (index: number, startTime: number) => {
  const addZero = index + startTime < 10 ? '0' : '';
  return `${addZero + (index + startTime)}`;
}
export const raidTimeList = Array.from({ length: 14 }, (_, i) => 
  [`${calcHour(i, RAID_START_TIME)}:00`, `${calcHour(i, RAID_START_TIME)}:30`]).flat();