import React from 'react';
import './separator.scss';

const Separator = ({text, className}) => {
  return (<React.Fragment>
    <div className={`separator ${className ? className : ''}`}><span>{text}</span></div>
  </React.Fragment>);
}

export default Separator;
