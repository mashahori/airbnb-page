import { useState } from 'react';
import { TextField, Button, withStyles } from '@material-ui/core';
import './index.scss';

const StyledButton = withStyles({
  root: {
    marginLeft: '20px',
  }
})(Button);

const Card = ({ rate, count, city, descr, price }) => (
  <div className="card__text text">
    <p>
      <span>{rate}({count})</span>
      <span>{city}</span>
    </p>
    <p>{descr}</p>
    <p>
      От {price} за человека
    </p>
  </div>
);

export default Card;