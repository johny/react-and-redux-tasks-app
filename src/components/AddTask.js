import React from 'react';

import './AddTask.css';

const AddTask = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="AddTask" onSubmit={handleSubmit}>
      <div className="AddTask__fieldset">
        <input className="AddTask__input" autoFocus={true} placeholder="Today, I want to..." />
        <button className="AddTask__button" type="submit">Create task</button>
      </div>
    </form>
  )
}

export default AddTask;