import React from 'react';

import { connect } from 'react-redux';

import FilterLink from '../containers/FilterLink';

import './Summary.css';

const mapStateToProps = (state) => {
  return {
    total: state.tasks.length,
    remaining: state.tasks.filter((f) => !f.completed).length,
    completed: state.tasks.filter((f) => f.completed).length
  };
};

let Summary = ({total, completed, remaining}) => {
  return (
    <div className="Summary">
      <FilterLink filter="SHOW_ALL" className="Summary__item">Total: {total}</FilterLink>
      <span className="Summary__separator">/</span>
      <FilterLink filter="SHOW_REMAINING" className="Summary__item">Remaining: {remaining}</FilterLink>
      <span className="Summary__separator">/</span>
      <FilterLink filter="SHOW_COMPLETED" className="Summary__item">Completed: {completed}</FilterLink>
    </div>
  )
}

Summary = connect(mapStateToProps)(Summary);

export default Summary;