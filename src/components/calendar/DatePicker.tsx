import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { DayCellContentArg, EventClickArg } from '@fullcalendar/core';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../utils/RTKhooks';
import { raidActions } from '../../store/raid';
import { UIActions } from '../../store/ui';
import { EventsType } from '../../types/calendar';

const DatePicker = () => {
  const dispatch = useAppDispatch();
  const schedule = useAppSelector(state => state.calendar.schedules);
  const events = schedule.map(item => {
    const save: EventsType[] = [];
    item.raid.forEach(el => save.push({
        id: el._id,
        title: `${el.name}-${el.level}`,
        start: `${item.date}T${el.time}`
      }));
    return save;
  }).flat();
  const navigate = useNavigate();
  const renderDayCellContent = (info: DayCellContentArg) => <div className="fc-day-number">{info.date.getDate()}</div>;
  
  const dateDetailHandler = (arg: DateClickArg) => {
    dispatch(raidActions.setDate(arg.dateStr));
    dispatch(UIActions.setIsCreate(true));
    dispatch(UIActions.setIsRaidListSelected(false));
    navigate('/raid');
  };

  const eventDetailHandler = (arg: EventClickArg) => {
    const date = arg.event.startStr.split('T')[0];
    dispatch(raidActions.setDate(date));
    dispatch(UIActions.setIsCreate(true));
    dispatch(UIActions.setIsRaidListSelected(false));
    navigate('/raid');
  };

  return (
    <FullCalendar
      plugins={[ dayGridPlugin, interactionPlugin ]}
      initialView="dayGridMonth"
      selectable
      locale="ko"
      dayCellContent={renderDayCellContent}
      dateClick={dateDetailHandler}
      eventClick={eventDetailHandler}
      events={events}
    />
  );
};


export default DatePicker;