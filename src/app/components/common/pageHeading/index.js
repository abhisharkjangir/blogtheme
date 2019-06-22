import React from 'react';
import './pageHeading.scss';
const PageHeading = ({text}) => {
  return (
    <div className='page-heading mb-2'>{text}</div>
  )
}

export default PageHeading;
