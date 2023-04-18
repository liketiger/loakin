import { CharacterDetail, MemberType  } from "./fetch-types";

type RaidDetail = {
  name: string,
  level: string,
  requireLevel?: number,
  time: string,
  attendants: CharacterDetail[]
};

type CalendarDetail = {
  date: string,
  raidList: RaidDetail[], 
};

type ModalType = {
  isOpen: boolean
}

type CrewPayloadType = CharacterDetail[][];

type InitialCalendarState = CalendarDetail[];
type InitialCrewState = MemberType;
type InitialModalState = ModalType;

export { InitialCalendarState, InitialCrewState, CrewPayloadType, InitialModalState };