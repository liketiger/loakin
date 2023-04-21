import { CharacterDetail, MemberType  } from "./fetch-types";

type RaidDetail = {
  name: string,
  level: string,
  requireLevel?: number,
  time: string,
  characterList: CharacterDetail[],
  _id?: string
};

type CalendarDetail = {
  date: string,
  raid: RaidDetail[],
  _id?: string
};

type CalendarType = {
  schedules: CalendarDetail[]
};

type ModalType = {
  isOpen: boolean
}

type RaidType = {
  date: string
}

type CrewPayloadType = CharacterDetail[][];

type InitialCalendarState = CalendarType;
type InitialCrewState = MemberType;
type InitialModalState = ModalType;
type InitialRaidState = RaidType;

export { InitialCalendarState, InitialCrewState, CrewPayloadType, InitialModalState, CalendarDetail, InitialRaidState };