import React from 'react';

import { connect } from 'react-redux';

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
      <span className="Summary__count">Total: {total}</span>
      <span className="Summary__separator">/</span>
      <span className="Summary__count">Remaining: {remaining}</span>
      <span className="Summary__separator">/</span>
      <span className="Summary__count">Completed: {completed}</span>
    </div>
  )
}

Summary = connect(mapStateToProps)(Summary);

export default Summary;