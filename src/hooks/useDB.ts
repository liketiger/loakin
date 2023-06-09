import { calendarActions } from '../store/calendar';
import { raidActions } from '../store/raid';
import { CharacterDetail } from '../types/fetch-types';
import { CalendarDetail, RaidDetail } from '../types/render-type';
import { useAppDispatch } from '../utils/RTKhooks';
import requestHttp from '../utils/request-Http';

const useDB = () => { 
  const dispatch = useAppDispatch();

  const addSchedule = async (data: CalendarDetail) => {
    await requestHttp({
      url: `${process.env.REACT_APP_API_SERVER}/schedule`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    dispatch(calendarActions.addCalendar(data));
  };

  const addRaid = async (data: RaidDetail, id: string) => {
    await requestHttp({
      url: `${process.env.REACT_APP_API_SERVER}/schedule/${id}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    dispatch(calendarActions.addRaid({ newRaid: data, id }));
  };

  const updateRaid = async (data: RaidDetail, scheduleId: string, raidId: string) => {
    await requestHttp({
      url: `${process.env.REACT_APP_API_SERVER}/schedule/${scheduleId}/${raidId}`,
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    dispatch(calendarActions.updateRaid({ data, scheduleId, raidId }));
  };

  const deleteRaid = async (scheduleId: string, raidId: string) => {
    await requestHttp({
      url: `${process.env.REACT_APP_API_SERVER}/schedule/${scheduleId}/${raidId}`,
      method: 'DELETE',
    });

    dispatch(calendarActions.removeRaid({ scheduleId, raidId }));
  };

  const addCrew = async (data: CharacterDetail, scheduleId: string, raidId: string) => {
    await requestHttp({
      url: `${process.env.REACT_APP_API_SERVER}/schedule/${scheduleId}/${raidId}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    dispatch(raidActions.addCharacter(data));
    dispatch(calendarActions.addCrew({ data, scheduleId, raidId }));
  };

  const deleteCrew = async (scheduleId: string, raidId: string, crewId: string) => {
    await requestHttp({
      url: `${process.env.REACT_APP_API_SERVER}/schedule/${scheduleId}/${raidId}/${crewId}`,
      method: 'DELETE',
    });

    dispatch(raidActions.removeCharacter(crewId));
    dispatch(calendarActions.removeCrew({ scheduleId, raidId, crewId }));
  };

  return {
    addSchedule,
    addRaid,
    deleteRaid,
    updateRaid,
    addCrew,
    deleteCrew
  }
};

export default useDB;