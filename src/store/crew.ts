import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { useRef } from 'react';
import { InitialCrewState, PayloadType } from '../types/render-type';
import { CharacterDetail } from '../types/fetch-types';
import { LOA_API_KEY } from '../api-keys';
import requestHttp from '../utils/request-Http';
import { useAppDispatch } from '../utils/RTKhooks';

const initialState: InitialCrewState = [
  {
    name: '이호',
    main: '호얏치',
    characterList: []
  },
  {
    name: '황성재',
    main: '에르가시안',
    characterList: []
  },
  {
    name: '임찬호',
    main: '임찬호임',
    characterList: []
  },
  {
    name: '김민지',
    main: '찬호지키미',
    characterList: []
  }
];

const crewSlice = createSlice({
  name: 'crew',
  initialState,
  reducers: {
    fetchCrew(state, action: PayloadAction<PayloadType>) {
      const characterList = [...action.payload.list];
      characterList.forEach(character => {
        character.ItemAvgLevel = Math.trunc(+(character.ItemAvgLevel as string).replace(',', ''));
      });
      characterList?.sort((a: CharacterDetail, b: CharacterDetail) => (b.ItemAvgLevel as number) - (a.ItemAvgLevel as number));
      state.find(item => item.main === action.payload.main)!.characterList = characterList;
    }
  }
});

const crewActions = crewSlice.actions;
const crewReducer = crewSlice.reducer;
// const dispatch = useAppDispatch();
// let crewList: CharacterDetail[][] = [];

// const fetchCrewList = async (character: string) => {
//   const fetchList = (data: CharacterDetail[]) => {
//     crewList = [...crewList, data];
//   };

//   await requestHttp(
//     {
//       url: `https://developer-lostark.game.onstove.com/characters/${character}/siblings`,
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `bearer ${LOA_API_KEY}`
//       },
//       body: null
//     },
//     fetchList
//   );
// };

// const dispatchHandler = () => dispatch(crewActions.fetchCrew(crewList));

export { crewReducer, crewActions };
