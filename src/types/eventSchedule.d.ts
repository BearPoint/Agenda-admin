export interface EventSchedule extends Event {
  allDay: boolean;
  conference: string;
  dateStart: Date;
  dateEnd: Date;
  description: string;
  label: string;
}
