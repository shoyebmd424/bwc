import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Set up localizer
const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([
    {
      start: new Date(),
      end: new Date(moment().add(1, "hours")),
      event_name: "Initial Meeting",
      location: "Office",
    },
  ]);

  const handleAddMeeting = () => {
    const newEvent = {
      start: new Date(moment().add(1, "days")),
      end: new Date(moment().add(1, "days").add(1, "hours")),
      event_name: "New Meeting",
      location: "Online",
    };
    setEvents([...events, newEvent]);
  };

  return (
    <div className="bg-white p-2 rounded">
      <div className="text-end my-4">
        <button
          onClick={handleAddMeeting}
          className="bg-light-blue rounded  border border-2 fw-bold  btn-hover "
        >
          Add New Meeting
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        selectable
        views={{ month: true, week: true, day: true }}
        components={{
          event: ({ event }) => (
            <div className="text-capitalize h-100">
              <strong>{event?.event_name}</strong> <br />
              <div>{event?.location}</div>
            </div>
          ),
        }}
      />
    </div>
  );
};

export default MyCalendar;
