import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('please add a task');
      return;
    }

    onAdd({
      text,
      day,
      reminder,
    });

    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="add-task-input">Task</label>
        <input
          id="add-task-input"
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label htmlFor="date-time-input">Day &amp; Time</label>
        <input
          id="date-time-input"
          type="text"
          placeholder="Add day &amp; time "
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder-input">Set Reminder </label>
        <input
          id="reminder-input"
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => {
            setReminder(e.currentTarget.checked);
          }}
        />
      </div>
      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  );
};

export default AddTask;
