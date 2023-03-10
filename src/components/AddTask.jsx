import React from "react";
import { useState } from "react";

export const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add task");
      return;
    }
    onAdd({ text, name, note, day, reminder });

    setText("");
    setName("");
    setNote("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>What app did you meet each other on?</label>
        <input
          type="text"
          placeholder="Add App"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Type their name here.</label>
        <input
          type="text"
          placeholder="Add Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Write your notes here.</label>
        <input
          type="text"
          placeholder="Add Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Friendable?</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Friend" className="btn btn-block" />
    </form>
  );
};
