import { LOCAL } from '../api-list';
import { useAppDispatch } from '../utils/RTKhooks';
import requestHttp from '../utils/request-Http';
import { calendarActions } from '../store/calendar';

const useCalendar = () => {
  const dispatch = useAppDispatch();
  const fetchCalendarList = async () => {
    const res = await requestHttp({
      url: `${LOCAL}/schedule`,
      method: 'GET',
      body: null
    });
    return res.data.schedules;
  };
  const fetchCalendar = () => fetchCalendarList().then(data => dispatch(calendarActions.setCalendar(data)));

  return fetchCalendar;
};

export default useCalendar;