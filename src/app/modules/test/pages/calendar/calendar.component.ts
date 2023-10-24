import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';
import { TestModule } from '../../test.module';
import { FormsModule } from '@angular/forms';
import { CollapseServiceService } from 'src/app/services/collapse-service.service';


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
export class CalendarComponent implements OnInit {
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  selectedOrgMod = "all";
  newDate = null;

  events: any[] = [
    // {
    //   daysOfWeek: ['3'], // these recurrent events move separately
    //   title: 'event 1', start: '2023-10-03', end: '2023-10-06', color: '#3D30A2', id: "a1"
    // },
    // {
    //   title: 'event 1', start: '2023-10-03', end: '2023-10-06', color: '#3D30A2', id: "a1"
    // },
    { title: 'event 1', date: '2023-10-06', color: '#3D30A2', id: "a2" },
    { title: 'event 3', date: '2023-10-03', color: 'red', id: "a3" },
    { title: 'event 4', date: '2023-10-03', color: 'green', id: "a4", extendedProps: { x: 'hola' } },
    { title: 'event 2', date: '2023-10-02', color: 'red', id: "a5" },
  ]

  constructor(
    private collapseServiceService: CollapseServiceService
  ) {}

  ngOnInit(): void {
    this.collapseServiceService.navCollapsed$.subscribe(resp => {
      setTimeout(() => {
        this.calendarComponent.getApi().render();
      }, 100);
    });
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth', //dayGridDay / dayGridWeek / dayGridMonth
    plugins: [dayGridPlugin],
    firstDay: 1,
    weekends: true, // initial value
    // hiddenDays:[1,0],
    locale: esLocale,
    // events: this.events,
    initialEvents: this.events,
    headerToolbar: {
      // left: 'today',
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
    // footerToolbar: {
    //   left: 'today'
    // },
    customButtons: {
      prev: {
        text: 'Antes',
        click: () => {
          this.calendarComponent.getApi().prev();
          console.log('prev')
          console.log(this.calendarComponent.getApi().getDate())
        }
      },
      next: {
        text: 'Despues',
        click: () => {
          this.calendarComponent.getApi().next();
          console.log('next')
          console.log(this.calendarComponent.getApi().getDate())
        }
      },
    },
    buttonText: {
      today: "Hoy",
      month: "Mes",
      week: "Semana",
      day: "Día",
    },
    eventChange: (x) => { console.log(x) },
    eventAdd: (x) => { console.log(x) },
    eventRemove: (x) => { console.log(x) },
    eventClick: (x: EventClickArg) => {
      if (confirm(`Delete event? \n ${JSON.stringify(x.event)}`)) {
        console.log("ok");
        x.event.remove();
        // this.calendarComponent.getApi().removeAllEventSources()
      }
    },

  };

  addEvent() {
    if (this.newDate != null) {
      console.log(this.newDate);
      this.calendarComponent.getApi().addEvent({
        title: 'event 1', date: this.newDate, color: 'black', id: "a1"
      })
      this.newDate = null;
    }
  }

  initEvents() {
    if (this.calendarComponent.getApi().getEvents().length == 0) {
      this.events.forEach(event => {
        this.calendarComponent.getApi().addEvent(event);
      });
    }
  }

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
