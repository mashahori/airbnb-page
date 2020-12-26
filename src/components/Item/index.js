import { useState } from 'react';
import { CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  // Card,
  withStyles } from '@material-ui/core';
import { Card, Gallery } from '../../components';
import './index.scss';

  const StyledMedia = withStyles({
    root: {
      width: `100%`,
      // maxWidth: `25%`,
      // minWidth: `20%`,
      height: `auto`,
    }
  })(CardMedia);

const Item = ({ item }) => {
  const [hover, setHovered] = useState(false);
  const { src,
    rate,
    count,
    city,
    descr,
    price,
    images } = item;

  return (
    <li className="item">
      <div className="item__image-wrapper" onMouseEnter={() => setHovered(true)}
     //  onMouseLeave={()=>setHovered(false)}
       >
        <img className="item__image" src={src} alt={descr} />
        {hover && <Gallery images={images} />}
      </div>
      <Card
        descr={descr}
        rate={rate}
        count={count}
        city={city}
        pric={price}
       />
    </li>
  );
};

export default Item;