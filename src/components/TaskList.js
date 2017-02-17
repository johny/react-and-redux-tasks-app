import React from 'react';
import className from 'classnames';

import './TaskList.css';

const Task = ({text, completed}) => {

  const itemClassNames = className('TaskList__task', {'TaskList__task--completed': completed});
  const iconClassNames = className('TaskList__checkmark', {'TaskList__checkmark--completed': completed});
  const textClassNames = className('TaskList__text', {'TaskList__text--completed': completed});

  return (
    <li className={itemClassNames}>
      <span className={iconClassNames}>✔︎</span>
      <span className={textClassNames}>{text}</span>
    </li>
  );
}

const TaskList = (props) => {

  const tasks = [
    {id: 0, text: 'Create mockup of the list', completed: true},
    {id: 1, text: 'Style task list item'},
    {id: 2, text: 'Add completed checkbox icon'},
    {id: 3, text: 'Add crossed out style'}
  ];

  return (
    <div className="TaskList">
      <ul className="TaskList__list">
        {
          tasks.map( t =>
            <Task key={t.id} {...t} />
          )
        }
      </ul>
    </div>
  );
};

export default TaskList;