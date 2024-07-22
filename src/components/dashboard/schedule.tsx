'use client'

import { EventClickArg } from "@fullcalendar/core";
import dayjs from "dayjs";
import { eventFormatter } from "@/utils/eventFormatter";
import { ModalType, useModal } from "@/hooks/useModal"
import { Appointment } from '@/types/appointment';
import { Browser, Internationalization } from '@syncfusion/ej2-base';
import { Agenda, Day, Inject, ScheduleComponent, ViewDirective, ViewsDirective, WorkWeek } from "@syncfusion/ej2-react-schedule";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import PatientProfile from "../common/patientProfile";
import { Patient } from "@/types/Patient";

export default function Schedule({
  events,
}: {
  events: Appointment[] | null;
}) {
  const { onOpen } = useModal();
  let intl: Internationalization = new Internationalization();
  console.log(events)
  const doubleClickOnEventHandler = (data: EventClickArg) => {
    const { jsEvent } = data;
    if (jsEvent.detail === 2) {
      onOpen({
        type: ModalType.viewAppointment,
        data: { event: data.event }
      });
    }
  };
  const timelineEventTemplate = (props) => {
    return (
      <div className="template-wrap" style={{ background: props.PrimaryColor }}>
        <div className="subject" style={{ background: props.SecondaryColor, borderRightWidth: 15, borderLeftWidth: 15, borderLeftColor: props.PrimaryColor, borderRightColor: props.PrimaryColor, borderLeftStyle: 'solid', borderRightStyle: 'solid' }}>{props.Subject}</div>
      </div>
    );
  }
  const getTimeString = (value: Date) => {
    return intl.formatDate(value, { skeleton: 'hm' });
  }
  const eventTemplate = (props) => {
    return (
      <div className="template-wrap" style={{ background: props.SecondaryColor }}>
        <div className="subject" style={{ background: props.PrimaryColor }}>{props.Subject}</div>
        <div className="time" style={{ background: props.PrimaryColor }}> Time: {getTimeString(props.StartTime)} - {getTimeString(props.EndTime)}</div>
        <div className="event-description">{props.Description}</div>
        <div className="footer" style={{ background: props.PrimaryColor }}></div>
      </div>
    );
  }


  const getHeaderTitle = (data: Record<string, any>): string => {
    return (data.elementType === 'cell') ? 'Add Appointment' : 'Appointment Details';
  }

  const getHeaderDetails = (data: { [key: string]: Date }): string => {
    return intl.formatDate(data.StartTime, { type: 'date', skeleton: 'full' }) + ' (' +
      intl.formatDate(data.StartTime, { skeleton: 'hm' }) + ' - ' +
      intl.formatDate(data.EndTime, { skeleton: 'hm' }) + ')';
  }
  const headerTemplate = (props: { [key: string]: Date }) => {
    return (
      <div className="quick-info-header px-4 py-4 bg-white">
        <div className="quick-info-header-content text-base font-medium leading-none text-muted-foreground">
          <div className="quick-info-title ">{getHeaderTitle(props)}</div>
          <div className="duration-text">{getHeaderDetails(props)}</div>
        </div>
      </div>
    );
  }
  const contentTemplate = (props: { [key: string]: string | Patient }) => {
    console.log({props})
    return (
      <div className="quick-info-content">
        {props.elementType === 'cell' ?
          <div className="e-cell-content">
            <div className="content-area">
              <Input id="title" placeholder="Title" />
            </div>
            <div className="content-area">
              <DropDownListComponent id="eventType"  dataSource={roomData} fields={{ text: "Name", value: "Id" }} placeholder="Choose Type" index={0} popupHeight="200px" />
            </div>
            <div className="content-area">
              <TextBoxComponent id="notes" ref={notesObj} placeholder="Notes" />
            </div>
          </div>
          :
          <div className="event-content">
            <PatientProfile patient={props.extendedProps.patient}/>
            <div className="notes-wrap mt-4">
              <label className="font-bold">Notes</label>:
              <p>{props.description}</p>
            </div>
          </div>
        }
      </div>
    );
  }

  const footerTemplate = (props: Record<string, any>) => {
    return (
      <div className="quick-info-footer">
        {props.elementType == "cell" ?
          <div className="cell-footer">
            <Button id="more-details" className='e-flat' content="" onClick={()=>{}}>More Details</Button>
            <Button id="add" className='e-flat' content="Add" isPrimary={true} onClick={()=>{}}>Add</Button>
          </div>
          :
          <div className="event-footer">
            <Button id="delete" className='e-flat' content="Delete" onClick={()=>{}} >Delete</Button>
            <Button id="more-details" className='e-flat' content="More Details" isPrimary={true} onClick={()=>{}} >More details</Button>
          </div>
        }
      </div>
    );
  }
  return (
    <div className="rounded-lg bg-white relative h-full overflow-y-auto">
      <ScheduleComponent startHour="5:00" eventSettings={{ dataSource: eventFormatter(events) }} quickInfoTemplates={{ header: headerTemplate, content: contentTemplate, footer: footerTemplate }}>
        <ViewsDirective>
          <ViewDirective option={Browser.isDevice ? 'Agenda' : 'WorkWeek'} eventTemplate={eventTemplate} />
          <ViewDirective option={Browser.isDevice ? 'WorkWeek' : 'Day'} eventTemplate={eventTemplate} />
        </ViewsDirective>
        <Inject services={[WorkWeek, Agenda, Day]} />
      </ScheduleComponent>
    </div>
  );
}
