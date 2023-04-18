import { useEffect } from "react";
import { LOA_API_KEY } from "../api-keys";
import { crewActions } from "../store/crew";
import { CharacterDetail } from "../types/fetch-types";
import { useAppDispatch, useAppSelector } from "./RTKhooks";
import requestHttp from "./request-Http";

export const useCrewList = async () => {
  let crewList: CharacterDetail[] = [];
  const dispatch = useAppDispatch();
  const fetchCrewList = async (character: string) => {
    const res = await requestHttp({
      url: `https://developer-lostark.game.onstove.com/characters/${character}/siblings`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${LOA_API_KEY}`
      },
      body: null,
    });
    return res;
  }

  const crewState = useAppSelector(state => state.crew);
  useEffect(() => {
    crewState.forEach(async character => {
      crewList = await fetchCrewList(character.main);
      dispatch(crewActions.fetchCrew({ main: character.main, list: crewList }));
    });
  }, [])

  console.log(crewState)
  // type CharacterDetail = Modify<>
  // mainCharacters.characterList
};
