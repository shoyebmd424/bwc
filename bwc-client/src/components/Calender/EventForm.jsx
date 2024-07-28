import React, { useEffect, useState } from "react";
import Axios from "../../Axios";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import useFetch from "../../Hooks/useFetch";

const EventPopup = ({ isOpen, onClose, onSave, event }) => {
  const [event_name, setName] = useState(event ? event?.event_name : "");
  const [event_desc, setDesc] = useState(event ? event?.event_desc : "");
  const [location, setLocation] = useState(event ? event?.location : "");
  const [start, setDate] = useState("");
  const [end, setEndDate] = useState("");
  // console.log(new Date(event?.start).toLocaleDateString());
  const [auth] = useAuth();
  useEffect(() => {
    setName(event?.event_name ? event?.event_name : "");
    setDesc(event?.event_desc ? event?.event_desc : "");
    setLocation(event?.location ? event?.location : "");
  }, [event]);
  const [list, setEmails] = useState([]);
  const { data } = useFetch("/auth/emails");
  const emails = [];

  useEffect(() => {
    setEmails(data);
  }, [data]);
  const newevent = {
    user_id: auth?.user?.id,
    event_name,
    event_desc,
    location,
    start,
    end,
    emails,
  };
  if (Array.isArray(list)) {
    list?.map((e) => {
      emails.push(e?.email);
      return e;
    });
  }

  const handleSave = async () => {
    try {
      const res = await Axios.post("/event", newevent);
      console.log(res);
      if (res.data && res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("somthing went wrong...");
    }
    onSave(event);
    onClose();
  };

  return (
    <div className={`popup ${isOpen ? "open" : ""}`}>
      <div className="popup-content">
        <h2>{event?.event_name ? "Edit Event" : "Add New Event"}</h2>
        <div className="row row-cols-md-2">
          <label>
            Event Name:
            <input
              type="text"
              className="form-control"
              value={event_name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          {/* event_name, event_desc, location, start, user_id */}
          <label>
            Event Description:
            <textarea
              type="text"
              className="form-control"
              value={event_desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              className="form-control"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>

          <label>
            Start Date:
            <input
              type="datetime-local"
              className="form-control"
              value={start}
              // value={end ? new Date(start)?.toISOString()?.slice(0, 16) : end}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <label>
            End Date:
            <input
              type="datetime-local"
              className="form-control"
              value={end}
              // value={end ? new Date(end)?.toISOString()?.slice(0, 16) : end}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
        </div>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EventPopup;
