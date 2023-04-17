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

type InitialCalendarState = CalendarDetail[];
type InitialCrewState = MemberType;

export { InitialCalendarState, InitialCrewState };