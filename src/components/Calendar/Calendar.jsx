import React from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import moment from 'moment';

const Calendar = ({ events, handleDateClick, handleEventClick }) => (
  <FullCalendar
    plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
    editable
    selectable
    headerToolbar={{
      start: 'prev,next today',
      center: 'title',
      end: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    }}
    selectHelper
    events={Object.values(events)}
    aspectRatio={1}
    select={({ start, end, view }) => {
      if (view.type !== 'dayGridMonth') {
        const startDate = moment(start).format('YYYY-MM-DD HH:mm:ss');
        const endDate = moment(end).format('YYYY-MM-DD HH:mm:ss');
        handleDateClick(view.type, startDate, endDate);
      } else {
        const startDate = moment(start).format('YYYY-MM-DD');
        const startTime = moment(start).format('HH:mm:ss');
        const startDateTime = `${startDate} ${startTime}`;
        const endDate = moment(end).subtract(1, 'days').format('YYYY-MM-DD');
        const endTime = moment(end).format('HH:mm:ss');
        const endDateTime = `${endDate} ${endTime}`;
        handleDateClick(view.type, startDateTime, endDateTime);
      }
    }}
    eventClick={({ event }) => {
      handleEventClick(event.id);
    }}
  />
);

export default Calendar;
