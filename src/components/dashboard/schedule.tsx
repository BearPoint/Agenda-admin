"use client";

import dayjs from "dayjs";
import { eventFormatter } from "@/utils/eventFormatter";
import { Appointment } from "@/types/appointment";
import { Browser, closest, isNullOrUndefined } from "@syncfusion/ej2-base";
import {
  Agenda,
  CurrentAction,
  Day,
  Inject,
  ResourceDirective,
  ResourcesDirective,
  ScheduleComponent,
  ViewDirective,
  ViewsDirective,
  WorkWeek,
} from "@syncfusion/ej2-react-schedule";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import PatientProfile from "../common/patientProfile";
import { Patient } from "@/types/Patient";
import "dayjs/locale/es-mx";
import SearchPatients from "../common/searchPatient/searchPatients";
import { useRef, useState } from "react";
import { Label } from "../ui/label";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

interface EventSchedule {
  StartTime: string,
  EndTime: string,
  Description: string,
  elementType: string
  PrimaryColor: string,
  SecondaryColor: string,
  Subject: string
  extendedProps: {
    patient: Patient
  }
}
const roomData: Record<string, any>[] = [
  { Name: 'Jammy', Id: 1, Capacity: 20, Color: '#ea7a57', Type: 'Conference' },
  { Name: 'Tweety', Id: 2, Capacity: 7, Color: '#7fa900', Type: 'Cabin' },
  { Name: 'Nestle', Id: 3, Capacity: 5, Color: '#5978ee', Type: 'Cabin' },
  { Name: 'Phoenix', Id: 4, Capacity: 15, Color: '#fec200', Type: 'Conference' },
  { Name: 'Mission', Id: 5, Capacity: 25, Color: '#df5286', Type: 'Conference' },
  { Name: 'Hangout', Id: 6, Capacity: 10, Color: '#00bdae', Type: 'Cabin' },
  { Name: 'Rick Roll', Id: 7, Capacity: 20, Color: '#865fcf', Type: 'Conference' },
  { Name: 'Rainbow', Id: 8, Capacity: 8, Color: '#1aaa55', Type: 'Cabin' },
  { Name: 'Swarm', Id: 9, Capacity: 30, Color: '#df5286', Type: 'Conference' },
  { Name: 'Photogenic', Id: 10, Capacity: 25, Color: '#710193', Type: 'Conference' }
];
export default function Schedule({ events }: { events: Appointment[] | null }) {
  dayjs.locale("es-mx");
  let scheduleObj = useRef<ScheduleComponent>(null);
  const [patient, setPatient] = useState<Patient | null>(null)
  const notesRef = useRef(null)
  const patientRef = useRef<Patient | null>(null)
  const supabase = createClientComponentClient()
  const getHeaderTitle = (data: Record<string, any>): string => {
    return data.elementType === "cell"
      ? "Crear Cita"
      : "detealles de cita";
  };

  const getHeaderDetails = (data: EventSchedule): string => {
    return (
      dayjs(data.StartTime).format("dddd, MMMM D, YYYY") +
      " (" +
      dayjs(data.StartTime).format("hh:mm") +
      " - " +
      dayjs(data.StartTime).add(1, 'hour').format("hh:mm") +
      ")"
    );
  };

  const buttonClickActions = async (e: Event) => {
    const quickPopup: HTMLElement = closest(e.target as HTMLElement, '.e-quick-popup-wrapper') as HTMLElement;
    console.log({ patient: patientRef?.current })
    const getSlotData: Function = (): Record<string, any> => ({
      id: scheduleObj?.current?.getEventMaxID(),
      extendedProps: {
        patient: patientRef.current
      },
      Subject: patientRef.current?.fullName,
      StartTime: new Date(scheduleObj?.current?.activeCellsData?.startTime),
      EndTime: new Date((scheduleObj?.current?.activeCellsData?.endTime)),
      IsAllDay: false,
      Description: isNullOrUndefined(notesRef.current.value) ? 'Add notes' : notesRef.current.value

    });
    console.log(getSlotData())
    if ((e.target as HTMLElement).id === 'add') {
      const getData = getSlotData()
      const { data: userData, error: userError } = await supabase.auth.getUser()
      const { data, error } = await supabase.from('appointment').insert({
        id_patient: patientRef.current?.id,
        id_account: userData.user?.id,
        date: dayjs(getData.StartTime).format(),
        notes: getData.Description
      })
      const addObj: Record<string, any> = getSlotData();
      scheduleObj?.current?.addEvent(addObj);

    } else if ((e.target as HTMLElement).id === 'delete') {

      const eventDetails: Record<string, any> = scheduleObj?.current?.activeEventData.event as Record<string, any>;
      let currentAction: CurrentAction = 'Delete';

      if (eventDetails.RecurrenceRule) {
        currentAction = 'DeleteOccurrence';
      }
      scheduleObj?.current?.deleteEvent(eventDetails, currentAction);
    } else {
      const isCellPopup: boolean = (quickPopup.firstElementChild as HTMLElement).classList.contains('e-cell-popup');
      const eventDetails: Record<string, any> = isCellPopup ? getSlotData() : scheduleObj?.current?.activeEventData.event as Record<string, any>;
      let currentAction: CurrentAction = isCellPopup ? 'Add' : 'Save';
      if (eventDetails.RecurrenceRule) {
        currentAction = 'EditOccurrence';
      }
      scheduleObj?.current?.openEditor(eventDetails, currentAction, true);
    }
    scheduleObj?.current?.closeQuickInfoPopup();
  }
  const headerTemplate = (props: EventSchedule) => {
    return (
      <div className="quick-info-header px-4 py-4 bg-white">
        <div className="quick-info-header-content text-base font-medium leading-none text-muted-foreground">
          <div className="quick-info-title ">{getHeaderTitle(props)}</div>
          <div className="duration-text">{getHeaderDetails(props)}</div>
        </div>
      </div>
    );
  };
  const contentTemplate = (props: EventSchedule) => {
    console.log({ props });
    return (
      <div className="quick-info-content">
        {props.elementType === "cell" ? (
          <div className="e-cell-content">
            <div className="content-area">
              <div>
                <Label className="">Paciente</Label>
                <SearchPatients onSelectedPatient={(patient) => patientRef.current = patient} />
              </div>
              <div className="mt-2">
                <Label className="">Anotaciones</Label>
                <Input id="notes" ref={notesRef} autoComplete="off" className="mt-2" />
              </div>
            </div>
          </div>
        ) : (
          <div className="event-content">
            {props?.extendedProps?.patient && <PatientProfile patient={props?.extendedProps?.patient} />}
            {props?.description != '' && <div className="notes-wrap mt-4">
              <label className="font-bold">Notes</label>:
              <p>{props.description}</p>
            </div>}
          </div>
        )}
      </div>
    );
  };

  const footerTemplate = (props: Record<string, any>) => {
    return (
      <div className=" mr-4 mb-3">
        {props.elementType == "cell" ? (
          <div className="cell-footer">
            <Button
              id="more-details"
              className="e-flat mr-5"
              variant={'outline'}
              content=""
              onClick={(e) => buttonClickActions(e)}
            >
              More Details
            </Button>
            <Button
              id="add"
              className="e-flat"
              content="Add"
              onClick={(e) => buttonClickActions(e)}
            >
              Add
            </Button>
          </div>
        ) : (
          <div className="event-footer">
            <Button
              id="delete"
              className="e-flat"
              content="Delete"
              onClick={() => { }}
            >
              Delete
            </Button>
            <Button
              id="more-details"
              className="e-flat"
              content="More Details"
              onClick={() => { }}
            >
              More details
            </Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="rounded-lg bg-white relative h-full overflow-y-auto">
      <ScheduleComponent
        ref={scheduleObj}
        startHour="5:00"

        eventSettings={{ dataSource: eventFormatter(events) }}
        quickInfoTemplates={{
          header: headerTemplate,
          content: contentTemplate,
          footer: footerTemplate,
        }}
      >
        <ViewsDirective>
          <ViewDirective
            option={Browser.isDevice ? "Agenda" : "WorkWeek"}
          />
          <ViewDirective
            option={Browser.isDevice ? "WorkWeek" : "Day"}
          />
        </ViewsDirective>
        <Inject services={[WorkWeek, Agenda, Day]} />
      </ScheduleComponent>
    </div>
  );
}
