import { connect } from 'react-redux';

import {toggleTask } from '../actions'
import TaskList from '../components/TaskList';

const getFilteredTasks = (tasks, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return tasks;
    case 'SHOW_REMAINING':
      return tasks.filter((t) => !t.completed);
    case 'SHOW_COMPLETED':
      return tasks.filter((t) => t.completed);
    default:
      return tasks;
  }
}

// mapping state to props
const mapStateToProps = (state) => {
  return {
    tasks: getFilteredTasks(state.tasks, state.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTaskClick: (id) => {
      dispatch(toggleTask(id))
    }
  }
}

// create container component
const VisibleTaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList);

export default VisibleTaskList;