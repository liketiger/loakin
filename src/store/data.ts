import { CharacterDetail, CharacterInfo, MemberType } from "../types/fetch-types";
import requestHttp from "../utils/request-Http";
import { LOA_API_KEY } from '../api-keys';

const charactersInfo: CharacterInfo = {
  characterList: []
};

const getData = (data: CharacterDetail[]) => {
  charactersInfo.characterList = data;
};

const refineData = async (character: string) => {
  await requestHttp({
    url: `https://developer-lostark.game.onstove.com/characters/${character}/siblings`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${LOA_API_KEY}`
    },
    body: null,
  }, getData);
  // charactersInfo.characterList =  charactersInfo.characterList.map((item: CharacterDetail) => {
  //   const temp = { ...item };
  //   delete temp.ItemMaxLevel;

  //   return temp;
  // });
};

// const fetchCrewList = (members: MemberType[]) => members.main.forEach(async (member) => {
//   await refineData(member.mainCharacter);
//   member.characterList = charactersInfo.characterList;
// });

export { };
