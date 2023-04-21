import { LOA_API_KEY } from '../api-list';
import { crewActions } from '../store/crew';
import { CharacterDetail } from '../types/fetch-types';
import { useAppDispatch, useAppSelector } from '../utils/RTKhooks';
import requestHttp from '../utils/request-Http';

const useCrew = () => {
  const dispatch = useAppDispatch();
  const fetchCrewList = async (character: string) => {
    const res = await requestHttp({
      url: `https://developer-lostark.game.onstove.com/characters/${character}/siblings`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${LOA_API_KEY}`
      },
      body: null
    });
    return res;
  };

  const crewState = useAppSelector((state) => state.crew);

  const fetchCrew = () => {
    Promise.all(crewState.main.map((item) => fetchCrewList(item))).then((data) => {
      data.forEach((characters) => {
        characters.forEach((character: CharacterDetail) => {
          character.ItemAvgLevel = Math.trunc(+(character.ItemAvgLevel as string).replace(',', ''));
        });
        characters.sort((a: CharacterDetail, b: CharacterDetail) => (b.ItemAvgLevel as number) - (a.ItemAvgLevel as number));
      });
      dispatch(crewActions.fetchCrew(data));
    });
  };

  return fetchCrew;
};

export default useCrew;
