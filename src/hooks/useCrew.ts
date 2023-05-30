import { crewActions } from '../store/crew';
import { CharacterDetail } from '../types/fetch-types';
import { useAppDispatch, useAppSelector } from '../utils/RTKhooks';
import requestHttp from '../utils/request-Http';
import { useCache } from './useCache';

const useCrew = () => {
  const dispatch = useAppDispatch();
  const cache = useCache();
  const fetchCrewList = async (character: string) => {
    const res = await requestHttp({
      url: `${process.env.REACT_APP_LOA_API}/characters/${character}/siblings`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${process.env.REACT_APP_LOA_API_KEY}`
      },
      body: null
    });
    return res;
  };

  const crewState = useAppSelector((state) => state.crew);
  const fetchCrew = async () => {
    const res = await Promise.all(crewState.main.map((item) => fetchCrewList(item)));
    res.forEach(characters => {
      characters.forEach((character: CharacterDetail) => {
        character.ItemAvgLevel = Math.trunc(+(character.ItemAvgLevel as string).replace(',', ''));
      });
      characters.sort((a: CharacterDetail, b: CharacterDetail) => (b.ItemAvgLevel as number) - (a.ItemAvgLevel as number));
    });
    const filteredList = res.map(characters => characters.filter((character: CharacterDetail) => character.CharacterLevel !== 1));
    dispatch(crewActions.fetchCrew(filteredList));
    return filteredList;
  };

  return cache.bind(null, fetchCrew);
};

export default useCrew;
