import { calendarActions } from '../store/calendar';
import { CalendarDetail, RaidDetail } from '../types/render-type';
import { useAppDispatch } from '../utils/RTKhooks';
import requestHttp from '../utils/request-Http';

const useDB = () => { 
  const dispatch = useAppDispatch();

  const addSchedule = async (data: CalendarDetail) => {
    await requestHttp({
      url: 'http://localhost:5000/schedule',
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
      url: `http://localhost:5000/schedule/${id}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    dispatch(calendarActions.addRaid({ newRaid: data, id }));
  };

  const updateRaid = async (data: CalendarDetail, id: string) => {
    await requestHttp({
      url: `http://localhost:5000/schedule/${id}`,
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    dispatch(calendarActions.addCalendar(data));
  };

  return {
    addSchedule,
    addRaid,
    updateRaid
  }
};

export default useDB;