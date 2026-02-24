import React, { Component } from 'react';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';
import BpkCalendar, { CALENDAR_SELECTION_TYPE } from '@skyscanner/backpack-web/bpk-component-calendar';
import { format } from 'date-fns';

import '@skyscanner/backpack-web/bpk-stylesheets/base.css';
import './App.css';

const formatDateFull = date => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = date => format(date, 'MMMM yyyy');
const daysOfWeek = [
  {
    name: 'Sunday',
    nameAbbr: 'Sun',
    index: 0,
    isWeekend: true,
  },
  {
    name: 'Monday',
    nameAbbr: 'Mon',
    index: 1,
    isWeekend: false,
  },
  {
    name: 'Tuesday',
    nameAbbr: 'Tue',
    index: 2,
    isWeekend: false,
  },
  {
    name: 'Wednesday',
    nameAbbr: 'Wed',
    index: 3,
    isWeekend: false,
  },
  {
    name: 'Thursday',
    nameAbbr: 'Thu',
    index: 4,
    isWeekend: false,
  },
  {
    name: 'Friday',
    nameAbbr: 'Fri',
    index: 5,
    isWeekend: false,
  },
  {
    name: 'Saturday',
    nameAbbr: 'Sat',
    index: 6,
    isWeekend: true,
  },
];

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedDate: null,
    };
  }

  handleDateSelect = (date) => {
    this.setState({
      selectedDate: date,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BpkText tagName="h1" textStyle="xxl" className="App-header__title">Flight Schedule</BpkText>
        </header>
        <main className="App-main">
          <BpkCalendar
            id="calendar"
            onDateSelect={this.handleDateSelect}
            formatMonth={formatMonth}
            formatDateFull={formatDateFull}
            daysOfWeek={daysOfWeek}
            weekStartsOn={1}
            changeMonthLabel="Change month"
            previousMonthLabel="Previous month"
            nextMonthLabel="Next month"
            selectionConfiguration={{
              type: CALENDAR_SELECTION_TYPE.single,
              date: this.state.selectedDate,
            }}
          />
          <BpkButton onClick={() => alert('Continue clicked!')}>Continue</BpkButton>
        </main>
      </div>
    );
  }
}
