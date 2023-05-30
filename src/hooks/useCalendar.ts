import { useAppDispatch } from '../utils/RTKhooks';
import requestHttp from '../utils/request-Http';
import { calendarActions } from '../store/calendar';

const useCalendar = () => {
  const dispatch = useAppDispatch();
  const fetchCalendarList = async () => {
    const res = await requestHttp({
      url: `${process.env.REACT_APP_API_SERVER}/schedule`,
      method: 'GET',
      body: null
    });
    return res.data.schedules;
  };
  const fetchCalendar = () => fetchCalendarList().then(data => {
    dispatch(calendarActions.setCalendar(data));
    console.log(data);
  });

  return fetchCalendar;
};

export default useCalendar;
