import React, { PropTypes } from 'react';

const linkPropTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

const Link = ({children, active, onClick, className}) => {

  if (active) {
    return <span>{children}</span>
  }

  return <a className={className} href="#" onClick={(e) => { e.preventDefault(); onClick(); }}>{children}</a>
}

Link.propTypes = linkPropTypes;

export default Link;