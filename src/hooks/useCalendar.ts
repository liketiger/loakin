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
    console.log(res);
    return res.data.schedules;
  };
  const fetchCalendar = () => fetchCalendarList().then(data => {
    dispatch(calendarActions.setCalendar(data));
    console.log(data);
  });

  return fetchCalendar;
};

export default useCalendar;
