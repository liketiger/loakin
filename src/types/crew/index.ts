import { CharacterDetail } from "../fetch-types";

export type CrewCharacterDetailProps = {
  info: CharacterDetail,
  index: number
};

export type CrewItemTypes = {
  name: string,
  characterList: CharacterDetail[],
};