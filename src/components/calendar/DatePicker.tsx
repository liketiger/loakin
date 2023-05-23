import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventClickArg } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../utils/RTKhooks';
import { raidActions } from '../../store/raid';
import { UIActions } from '../../store/ui';

type DayCellContentArg = {
  date: Date
};

type DateClickArg = {
  date: Date,
  dateStr: string,
}

type EventsType = {
  id: string | undefined,
  title: string,
  start: string
};

const DatePicker = () => {
  const dispatch = useAppDispatch();
  const schedule = useAppSelector(state => state.calendar.schedules);
  const events = schedule.map(item => {
    const save: EventsType[] = [];
    item.raid.forEach(el => save.push({
        id: el._id,
        title: `${el.name}-${el.level}`,
        start: `2023-05-24T09:00`
      }));
    return save;
  }).flat();
  console.log(events);
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