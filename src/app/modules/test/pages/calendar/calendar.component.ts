import { Component, ViewChild } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { TestModule } from '../../test.module';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    FormsModule,
    TestModule,
    FullCalendarModule // register FullCalendar with your app
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  events: any[] = [
    { title: 'event 1', start: '2023-10-01', end: '2023-10-06', color: 'black', id: "a1" },
    { title: 'event 2', date: '2023-10-02', color: 'red', id: "a2" },
    { title: 'event 3', date: '2023-10-03', color: 'red', id: "a3" },
    { title: 'event 4', date: '2023-10-03', color: 'green', id: "a4", extendedProps: {x:'hola'} }
  ]

  constructor() {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth', //dayGridDay / dayGridWeek / dayGridMonth
    headerToolbar: {
      left: 'prev,next,today',
      // left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
    buttonText: {
      today: "Hoy",
      month: "Mes",
      week: "Semana",
      day: "Día",
    },
    firstDay: 1,
    weekends: true, // initial value
    plugins: [dayGridPlugin],
    events: this.events,
    eventClick: (x: EventClickArg) => {
      if (confirm(`Delete event? \n ${JSON.stringify(x.event)}`)) {
        console.log("ok");
        x.event.remove();
        // this.calendarComponent.getApi().removeAllEventSources()
      }
    },

  };

  addEvent() {
    this.calendarComponent.getApi().addEvent({
      title: 'event 1', start: '2023-10-01', end: '2023-10-06', color: 'black', id: "a1"
    })
  }

  initEvents() {
    if (this.calendarComponent.getApi().getEvents().length == 0) {
      this.events.forEach(event => {
        this.calendarComponent.getApi().addEvent(event);
      });
    }
  }

  selectedOrgMod = "all";

  deleteAll() {
    this.calendarComponent.getApi().removeAllEvents();
  }

  filterBy(filter) {
    this.calendarComponent.getApi().removeAllEvents();
    if (filter != 'all') {
      let eventsFilter: any[] = this.events.filter(e => e.color == filter);
      eventsFilter.forEach(event => {
        this.calendarComponent.getApi().addEvent(event);
      });
    } else {
      this.events.forEach(event => {
        this.calendarComponent.getApi().addEvent(event);
      });
    }
  }
}
