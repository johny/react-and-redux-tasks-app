import { connect } from 'react-redux';

import {toggleTask } from '../actions'
import TaskList from '../components/TaskList';

// mapping state to props
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
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