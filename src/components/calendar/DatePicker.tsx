import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useNavigate } from 'react-router-dom';

type DayCellContentArg = {
  date: Date
};

type DateClickArg = {
  date: Date,
  dateStr: string,
}

const events = [
  {
    id: 'a',
    title: '발탄-하드',
    start: '2023-04-13T09:30:00'
  }
]

const DatePicker = () => {
  const navigate = useNavigate();
  const renderDayCellContent = (info: DayCellContentArg) => <div className="fc-day-number">{info.date.getDate()}</div>;
  const dateDetailHandler = (arg: DateClickArg) => {
    navigate('/raid');
  };
  const eventDetailHandler = () => {
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