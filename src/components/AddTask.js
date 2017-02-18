import React from 'react';
import { connect } from 'react-redux';

import { addTask } from '../actions';

import './AddTask.css';

let AddTask = ({dispatch}) => {

  let input;

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch action
    dispatch(addTask(input.value));

    // reset node
    input.value = '';
  };

  return (
    <form className="AddTask" onSubmit={handleSubmit}>
      <div className="AddTask__fieldset">
        <input ref={(node) => { input = node}} className="AddTask__input" autoFocus={true} placeholder="Today, I want to..." />
        <button className="AddTask__button" type="submit">Create task</button>
      </div>
    </form>
  )
}

AddTask = connect()(AddTask)

export default AddTask;