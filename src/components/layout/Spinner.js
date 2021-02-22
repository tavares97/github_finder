import React, { Fragment } from 'react';

//IMPORT GIF
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt="loading..." style={spinenrStyle} />
    </Fragment>
  );
};

const spinenrStyle = {
  width: '200px',
  margin: 'auto',
  display: 'block',
};

export default Spinner;
