import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { InitialCrewState } from "../types/render-type";
import { CharacterDetail } from "../types/fetch-types";
import { LOA_API_KEY } from "../api-keys";
import requestHttp from "../utils/request-Http";

const initialState: InitialCrewState = {
  name: ['이호', '황성재', '임찬호', '김민지'],
  main: ['호얏치', '에르가시안', '임찬호임', '찬호지키미'],
  characterList: []
};

const crewSlice = createSlice({
  name: 'crew',
  initialState,
  reducers: {
    fetchCrew(state, action) {
      state.characterList = action.payload;
    }
  }
});

const crewListRef = useRef<CharacterDetail[]>();
const dispatch = useDispatch();
const crewActions = crewSlice.actions;
const crewReducer = crewSlice.reducer;

const fetchCrewList = async (character: string) => {
  const fetchList = (data: CharacterDetail[]) => {
    crewListRef.current = data;
  };

  await requestHttp({
    url: `https://developer-lostark.game.onstove.com/characters/${character}/siblings`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${LOA_API_KEY}`
    },
    body: null,
  }, fetchList);

  dispatch(crewActions.fetchCrew(crewListRef.current))
}



export { fetchCrewList, crewReducer };