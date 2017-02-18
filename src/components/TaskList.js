import React from 'react';
import className from 'classnames';

import './TaskList.css';

const Task = ({onClick, text, completed}) => {

  const itemClassNames = className('TaskList__task', {'TaskList__task--completed': completed});
  const iconClassNames = className('TaskList__checkmark', {'TaskList__checkmark--completed': completed});
  const textClassNames = className('TaskList__text', {'TaskList__text--completed': completed});

  return (
    <li className={itemClassNames} onClick={onClick}>
      <span className={iconClassNames}>✔︎</span>
      <span className={textClassNames}>{text}</span>
    </li>
  );
}

const TaskList = ({ tasks, onTaskClick }) => {

  if (tasks.length === 0) {
    return <div className="TaskList TaskList--empty">You don't have any tasks in this view...</div>;
  }

  return (
    <div className="TaskList">
      <ul className="TaskList__list">
        { tasks.map((t) => <Task key={t.id} {...t} onClick={() => onTaskClick(t.id)} />)}
      </ul>
    </div>
  );
};

export default TaskList;