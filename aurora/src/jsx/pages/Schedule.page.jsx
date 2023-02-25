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
import jsPDF from 'jspdf'; // Import jsPDF library

const startDate = new Date(2023, 1, 20); // Start date of the week
let schedulerData = [
  { startDate: new Date(2023, 1, 20, 9, 45), endDate: new Date(2023, 1, 20, 11, 0), title: 'COMP 1010' },
  { startDate: new Date(2023, 1, 22, 12, 0), endDate: new Date(2023, 1, 22, 13, 30), title: 'MATH 1500' },
  { startDate: new Date(2023, 1, 23, 10, 0), endDate: new Date(2023, 1, 23, 11, 30), title: 'MATH 1300' },
  { startDate: new Date(2023, 1, 24, 15, 30), endDate: new Date(2023, 1, 24, 16, 0), title: 'STAT 1000' },
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


  function handlePdfDownload() {
    const tableData = schedulerData;
    const doc = new jsPDF();
    doc.text('Your weekly schedule', 10, 10);
    let rowHeight = doc.internal.getLineHeight();
    let x = 10;
    let y = 20;
    for (let i = 0; i < tableData.length; i++) {
      let rowData = tableData[i];
      doc.text(format(rowData.startDate, 'MMM d'), x, y);
      x += 40; // Set the cell width to 40
      doc.text(format(rowData.startDate, 'h:mm aaa'), x, y);
      x += 40; // Set the cell width to 40
      doc.text(format(rowData.endDate, 'h:mm aaa'), x, y);
      x += 40; // Set the cell width to 40
      doc.text(`: ${rowData.title}`, x, y);
      x += 60; // Set the cell width to 60
      x = 10; // Reset the x position to the beginning of the row
      y += rowHeight; // Move down to the next row
    }
    doc.save('schedule-information.pdf');
  }
  
  
  


  return (
    <Paper>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button class="btn btn-primary" onClick={handlePrevClick}>Previous Week</button>
        <button class="btn btn-primary" onClick={handlePdfDownload}>Download PDF</button>
        <button class="btn btn-primary" onClick={handleNextClick}>Next Week</button>
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
