import * as React from 'react';
import { startOfWeek, format } from 'date-fns';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import { addDays, subDays } from 'date-fns';

const startDate = new Date(2023, 1, 20); // Start date of the week
let schedulerData = [
  { startDate: new Date(2023, 1, 20, 9, 45), endDate: new Date(2023, 1, 20, 11, 0), title: 'Meeting' },
  { startDate: new Date(2023, 1, 22, 12, 0), endDate: new Date(2023, 1, 22, 13, 30), title: 'Go to a gym' },
  { startDate: new Date(2023, 1, 23, 10, 0), endDate: new Date(2023, 1, 23, 11, 30), title: 'Doctor appointment' },
  { startDate: new Date(2023, 1, 24, 15, 30), endDate: new Date(2023, 1, 24, 16, 0), title: 'Call mom' },
];

export default function MyScheduler() {
  const [currentDate, setCurrentDate] = React.useState(startDate);

  const handleNextClick = () => {
    setCurrentDate(addDays(currentDate, 7));
  };

  const handlePrevClick = () => {
    const prevWeekStartDate = subDays(currentDate, 7);
    setCurrentDate(prevWeekStartDate);   
  };

  return (
    <Paper>
      <div>Week at Glance</div>
      <div>
        <button onClick={handlePrevClick}>Previous Week</button>
        <button onClick={handleNextClick}>Next Week</button>
      </div>
      <Scheduler data={schedulerData}>
        <ViewState currentDate={currentDate} />
        <WeekView startDayHour={7} endDayHour={23} />
        <Appointments />
      </Scheduler>
    </Paper>
  );
}

/*
startDate must be a type of date like that:
new Date(2023, 1, 20, 9, 45) // year, month, day, hour, minutes

same for the endDate
*/
const addCourseToScheduler = (startDate, endDate, title) => {
  schedulerData = [
    ...schedulerData,
    { startDate: startDate, endDate: endDate, title: title },
  ];
};
