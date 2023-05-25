import { crewActions } from "../store/crew";
import { CharacterDetail } from "../types/fetch-types";
import { useAppDispatch } from "../utils/RTKhooks";

export const useCache = () => {
  const dispatch = useAppDispatch();
  const processCache = async (fnc: () => Promise<CharacterDetail[][]>) => {
    try {
      const cache = await caches.open('crew');
      
      const response = await cache.match('/crewList');
      if (response) {
        const res = await response.json();
        dispatch(crewActions.fetchCrew(res));
      } 
      else {
        const res = await fnc();
        // Add the fetched resource to the cache
        await cache.put('/crewList', new Response(JSON.stringify(res), {
          headers: { 'Content-Type': 'application/json' }
        }));
        dispatch(crewActions.fetchCrew(res));
      }
      // Use the fetched resource  
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return processCache;
};