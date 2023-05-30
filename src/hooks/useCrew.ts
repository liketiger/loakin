import '../utils/env'
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
      url: `https://developer-lostark.game.onstove.com/characters/${character}/siblings`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${process.env.LOA_API_KEY}`
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
    dispatch(crewActions.fetchCrew(res));
    return res;
  };

  return cache.bind(null, fetchCrew);
};

export default useCrew;
