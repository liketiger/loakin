import { EXPIRATION_TIME } from "../constants";
import { crewActions } from "../store/crew";
import { CharacterDetail } from "../types/fetch-types";
import { useAppDispatch } from "../utils/RTKhooks";

export const useCache = () => {
  const dispatch = useAppDispatch();
  const cacheKey = '/crewList'
  const cacheObj = {
    data: [],
    cachedTime: new Date().getTime()
  };
  const processCache = async (fnc: () => Promise<CharacterDetail[][]>) => {
    try {
      const cache = await caches.open('crew');
      
      const response = await cache.match(cacheKey);
      if (response) {
        const res = await response.json();
        const cachedTime = new Date(res.cachedTime).getTime();
        const currentTime = new Date().getTime();
        
        if (currentTime - cachedTime > EXPIRATION_TIME) {
          const data = await fnc();
          const newCache = { ...cacheObj, data };

          await cache.put(cacheKey, new Response(JSON.stringify(newCache), {
            headers: { 'Content-Type': 'application/json' }
          }));
          dispatch(crewActions.fetchCrew(data));
        } else {
          dispatch(crewActions.fetchCrew(res.data));
        }
      } else {
        const data = await fnc();
        const newCache = { ...cacheObj, data };
        // Add the fetched resource to the cache
        await cache.put(cacheKey, new Response(JSON.stringify(newCache), {
          headers: { 'Content-Type': 'application/json' }
        }));
        dispatch(crewActions.fetchCrew(data));
      }
      // Use the fetched resource  
    } catch (error) {
      alert(error);
    }
  };

  return processCache;
};