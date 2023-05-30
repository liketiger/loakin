import { CharacterDetail } from "../fetch-types";
import { CalendarDetail, RaidDetail } from "../render-type";

export type RaidCrewInfoPropsType = {
  character: CharacterDetail
};

export type SelectBtnType = {
  isCreate: boolean;
  btnType: string;
  isRaid?: boolean;
};

export type RaidFormPropType = {
  isCreate: boolean,
  currentId: string
};

export type RaidInfoItemProps = {
  item: RaidDetail;
  scheduleId: string | undefined;
};

export type RaidInfoProp = {
  raid: RaidDetail[];
  scheduleId: string | undefined;
};

export type RaidScheduleFormPropsType = {
  newSchedule: CalendarDetail;
};