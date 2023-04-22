import { calendarActions } from '../store/calendar';
import { CalendarDetail } from '../types/render-type';
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

  return {
    addSchedule
  }
};

export default useDB;