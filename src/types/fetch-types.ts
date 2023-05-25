import { RaidDetail } from "./render-type";

type RequestData = {
  url: string,
  method: string,
  headers?: HeadersInit,
  body?: BodyInit | null
};

type CharacterDetail = {
  ServerName: string,
  CharacterName: string,
  CharacterLevel: number,
  CharacterClassName: string,
  ItemAvgLevel: string | number,
  ItemMaxLevel?: string,
  _id?: string
};

type CharacterInfo = {
  characterList: CharacterDetail[]
};

type MemberType = {
  name: string[],
  main: string[],
  characterList: CharacterDetail[][]
};

type NewRaidPayloadTypes = {
  newRaid: RaidDetail,
  id: string
};

export type RemoveRaidPayloadTypes = {
  scheduleId: string,
  raidId: string
};

export type AddCrewPayloadTypes = {
  data: CharacterDetail,
  scheduleId: string,
  raidId: string
};

export type UpdateRaidPayloadTypes = {
  data: RaidDetail,
  scheduleId: string,
  raidId: string
};

export type RemoveCrewPayloadTypes = {
  scheduleId: string,
  raidId: string,
  crewId: string
};

export { RequestData, CharacterDetail, CharacterInfo, MemberType, NewRaidPayloadTypes };